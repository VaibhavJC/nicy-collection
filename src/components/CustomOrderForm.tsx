import { useState } from "react";
import { ImagePlus, Send } from "lucide-react";
import { categories } from "../data/categories";
import { occasions } from "../data/occasions";
import { getCustomOrderUrl } from "../utils/whatsapp";

const inputClasses =
  "w-full rounded-xl border border-champagne bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-gold-dark focus:outline-none transition-colors";
const labelClasses = "text-sm font-medium text-ink mb-1.5 block";

export default function CustomOrderForm() {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    category: "",
    occasion: "",
    colour: "",
    style: "",
    requiredDate: "",
    quantity: "",
    requirements: "",
  });
  const [referenceImage, setReferenceImage] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getCustomOrderUrl({
      name: form.name,
      category: form.category,
      occasion: form.occasion,
      colour: form.colour,
      style: form.style,
      requiredDate: form.requiredDate,
      quantity: form.quantity,
      requirements: form.requirements,
    });
    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={labelClasses}>
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          className={inputClasses}
          value={form.name}
          onChange={update("name")}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="whatsapp" className={labelClasses}>
          WhatsApp Number
        </label>
        <input
          id="whatsapp"
          type="tel"
          required
          className={inputClasses}
          value={form.whatsapp}
          onChange={update("whatsapp")}
          placeholder="Your WhatsApp number"
        />
      </div>

      <div>
        <label htmlFor="category" className={labelClasses}>
          Product Category
        </label>
        <select
          id="category"
          className={inputClasses}
          value={form.category}
          onChange={update("category")}
        >
          <option value="">Select a category</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="occasion" className={labelClasses}>
          Occasion
        </label>
        <select
          id="occasion"
          className={inputClasses}
          value={form.occasion}
          onChange={update("occasion")}
        >
          <option value="">Select an occasion</option>
          {occasions.map((o) => (
            <option key={o.slug} value={o.name}>
              {o.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="colour" className={labelClasses}>
          Preferred Colour
        </label>
        <input
          id="colour"
          type="text"
          className={inputClasses}
          value={form.colour}
          onChange={update("colour")}
          placeholder="e.g. Ivory & gold"
        />
      </div>

      <div>
        <label htmlFor="style" className={labelClasses}>
          Preferred Style
        </label>
        <input
          id="style"
          type="text"
          className={inputClasses}
          value={form.style}
          onChange={update("style")}
          placeholder="e.g. Traditional, floral, minimal"
        />
      </div>

      <div>
        <label htmlFor="requiredDate" className={labelClasses}>
          Required Date
        </label>
        <input
          id="requiredDate"
          type="date"
          className={inputClasses}
          value={form.requiredDate}
          onChange={update("requiredDate")}
        />
      </div>

      <div>
        <label htmlFor="quantity" className={labelClasses}>
          Quantity
        </label>
        <input
          id="quantity"
          type="text"
          className={inputClasses}
          value={form.quantity}
          onChange={update("quantity")}
          placeholder="e.g. 1 set"
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="requirements" className={labelClasses}>
          Custom Requirements
        </label>
        <textarea
          id="requirements"
          rows={4}
          className={inputClasses}
          value={form.requirements}
          onChange={update("requirements")}
          placeholder="Tell us what you'd love — inspiration, sizing, or anything else."
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="referenceImage" className={labelClasses}>
          Reference Image (optional)
        </label>
        <label
          htmlFor="referenceImage"
          className="flex items-center gap-3 rounded-xl border border-dashed border-champagne px-4 py-4 text-sm text-ink-soft cursor-pointer hover:border-gold-dark transition-colors"
        >
          <ImagePlus size={20} aria-hidden="true" />
          {referenceImage ? referenceImage.name : "Upload a reference image"}
        </label>
        <input
          id="referenceImage"
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={(e) => setReferenceImage(e.target.files?.[0] ?? null)}
        />
        {referenceImage && (
          <p className="text-xs text-ink-soft mt-2">
            Since this is a WhatsApp enquiry, please attach this image directly
            in the chat that opens — we'll keep an eye out for it!
          </p>
        )}
      </div>

      <div className="sm:col-span-2 pt-2">
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-forest text-ivory px-8 py-3.5 text-sm sm:text-base font-medium hover:bg-[#28361f] transition-colors"
        >
          <Send size={18} aria-hidden="true" />
          Send Enquiry on WhatsApp
        </button>
        {submitted && (
          <p className="text-sm text-forest mt-3">
            We've opened WhatsApp with your details — just hit send!
          </p>
        )}
      </div>
    </form>
  );
}
