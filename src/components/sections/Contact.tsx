import React, { useState } from "react"
import {
  SendIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  CheckIcon,
} from "lucide-react"
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    }, 3000)
  }
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me
            through the form or my social profiles.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 bg-gradient-to-br from-purple-600 to-blue-600 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-purple-200 mb-1">Email</p>
                    <a
                      href="mailto:maduranginimesha8@gmail.com"
                      className="flex items-center gap-2 hover:text-purple-200 transition-colors"
                    >
                      <MailIcon size={18} />
                      <span>maduranginimesha8@gmail.com</span>
                    </a>
                  </div>
                  <div>
                    <p className="text-purple-200 mb-3">Connect with me</p>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/NimeshaMadurangi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        aria-label="GitHub"
                      >
                        <GithubIcon size={20} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/nimesha-madurangi-812972217/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <LinkedinIcon size={20} />
                      </a>
                      <a
                        href="mailto:maduranginimesha8@gmail.com"
                        className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        aria-label="Email"
                      >
                        <MailIcon size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-lg"></div>
                </div>
              </div>
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                      <CheckIcon size={32} />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Thank you for reaching out. I'll get back to you as soon
                      as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center gap-2"
                    >
                      Send Message
                      <SendIcon size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
