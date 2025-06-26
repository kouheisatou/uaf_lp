/**
 * CSV読み込み用ユーティリティ関数
 * パブリックフォルダのCSVファイルを読み込み、オブジェクト配列に変換
 */

// CSVを配列のオブジェクトに変換
export function parseCSV<T>(csvText: string): T[] {
  const lines = csvText.trim().split('\n');
  if (lines.length <= 1) return [];

  const headers = lines[0].split(',').map((header) => header.trim());
  const data: T[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map((value) => value.trim());
    const obj: any = {};

    headers.forEach((header, index) => {
      let value = values[index] || '';

      // 数値の変換
      if (!isNaN(Number(value)) && value !== '') {
        obj[header] = Number(value);
      }
      // ブール値の変換
      else if (value.toLowerCase() === 'true') {
        obj[header] = true;
      } else if (value.toLowerCase() === 'false') {
        obj[header] = false;
      }
      // 文字列
      else {
        obj[header] = value;
      }
    });

    data.push(obj as T);
  }

  return data;
}

// CSVファイルを読み込み
export async function loadCSV<T>(filename: string): Promise<T[]> {
  try {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const response = await fetch(`${basePath}/contents/${filename}`);

    if (!response.ok) {
      console.warn(`CSV file not found: ${filename}, using fallback data`);
      return [];
    }

    const csvText = await response.text();
    return parseCSV<T>(csvText);
  } catch (error) {
    console.warn(`Error loading CSV: ${filename}`, error);
    return [];
  }
}
