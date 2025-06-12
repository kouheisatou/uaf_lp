import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  id: string;
}

const ContactSection: React.FC<Props> = ({ id }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: hook up backend or service (Formspree, etc.)
    console.log("Submit", form);
    setSubmitted(true);
  };

  return (
    <section id={id} className="w-full px-6 py-24 bg-gray-900/50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">お問い合わせ</h2>
      {submitted ? (
        <p className="text-center text-xl">送信ありがとうございました！</p>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto grid gap-6"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold">
              お名前
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-gray-800/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-brand placeholder-gray-400"
              placeholder="山田 太郎"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-gray-800/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-brand placeholder-gray-400"
              placeholder="example@university.ac.jp"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold">
              お問い合わせ内容
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-gray-800/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-brand placeholder-gray-400"
              placeholder="ご質問・ご相談内容をお書きください"
            />
          </div>
          <button
            type="submit"
            className="mt-4 py-3 px-6 bg-brand hover:bg-brand-light rounded-full font-semibold transition-colors"
          >
            送信する
          </button>
        </motion.form>
      )}
    </section>
  );
};

export default ContactSection; 