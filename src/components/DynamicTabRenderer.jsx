"use client";
import { produce } from "immer";

// ─── Page Schemas ────────────────────────────────────────────────────────────
// Add a new page here — no other files need to change.
// Supported field types: text, textarea, image, array
// array fields support nested: text, textarea fields only

export const pageSchemas = {
    "home-loan": {
        hero: [
            { key: "badge", label: "Badge", type: "text" },
            { key: "heading", label: "Heading", type: "textarea" },
            { key: "subtext", label: "Subtext", type: "textarea" },
            { key: "backgroundImage", label: "Background Image", type: "image" },
            { key: "form.title", label: "Form Title", type: "text" },
            { key: "form.subtitle", label: "Form Subtitle", type: "text" },
            { key: "form.submitButton", label: "Submit Button Text", type: "text" },
        ],
        info: [
            { key: "image", label: "Info Image", type: "image" },
            { key: "stat.value", label: "Stat Value", type: "text" },
            { key: "stat.label", label: "Stat Label", type: "text" },
            { key: "heading", label: "Heading", type: "textarea" },
            { key: "paragraph", label: "Paragraph", type: "textarea" },
            {
                key: "features", label: "Features", type: "array",
                fields: [
                    { key: "title", label: "Title", type: "text" },
                    { key: "description", label: "Description", type: "textarea" },
                ],
            },
        ],
        faq: [
            {
                key: "items", label: "FAQs", type: "array",
                fields: [
                    { key: "question", label: "Question", type: "text" },
                    { key: "answer", label: "Answer", type: "textarea" },
                ],
            },
        ],
    },

    "nri-loan": {
        hero: [
            { key: "badge", label: "Badge", type: "text" },
            { key: "heading", label: "Heading", type: "textarea" },
            { key: "subtext", label: "Subtext", type: "textarea" },
            { key: "tagline", label: "Tagline", type: "text" },
            { key: "backgroundImage", label: "Background Image", type: "image" },
            { key: "form.title", label: "Form Title", type: "text" },
            { key: "form.subtitle", label: "Form Subtitle", type: "text" },
            { key: "form.submitButton", label: "Submit Button Text", type: "text" },
        ],
        info: [
            { key: "image", label: "Info Image", type: "image" },
            { key: "badge", label: "Badge", type: "text" },
            { key: "heading", label: "Heading", type: "textarea" },
            { key: "paragraph", label: "Paragraph", type: "textarea" },
            { key: "loansHeading", label: "Loans Heading", type: "text" },
            {
                key: "loanTypes", label: "Loan Types", type: "array",
                fields: [
                    { key: "title", label: "Title", type: "text" },
                    { key: "description", label: "Description", type: "textarea" },
                ],
            },
        ],
        faq: [
            {
                key: "items", label: "FAQs", type: "array",
                fields: [
                    { key: "question", label: "Question", type: "text" },
                    { key: "answer", label: "Answer", type: "textarea" },
                ],
            },
        ],
    },

    "loan-against-property": {
        hero: [
            { key: "badge", label: "Badge", type: "text" },
            { key: "heading", label: "Heading", type: "textarea" },
            { key: "tagline", label: "Tagline", type: "text" },
            { key: "backgroundImage", label: "Background Image", type: "image" },
            { key: "form.title", label: "Form Title", type: "text" },
            { key: "form.subtitle", label: "Form Subtitle", type: "text" },
            { key: "form.submitButton", label: "Submit Button Text", type: "text" },
        ],
        info: [
            { key: "image", label: "Info Image", type: "image" },
            { key: "stat.value", label: "Stat Value", type: "text" },
            { key: "stat.label", label: "Stat Label", type: "text" },
            { key: "heading", label: "Heading", type: "textarea" },
            { key: "paragraph", label: "Paragraph", type: "textarea" },
            {
                key: "features", label: "Features", type: "array",
                fields: [
                    { key: "icon", label: "Icon Name", type: "text" },
                    { key: "title", label: "Title", type: "text" },
                    { key: "description", label: "Description", type: "textarea" },
                ],
            },
        ],
        faq: [
            {
                key: "items", label: "FAQs", type: "array",
                fields: [
                    { key: "question", label: "Question", type: "text" },
                    { key: "answer", label: "Answer", type: "textarea" },
                ],
            },
        ],
    },

    "balance-transfer": {
        hero: [
            { key: "badge", label: "Badge", type: "text" },
            { key: "heading", label: "Heading", type: "textarea" },
            { key: "tagline", label: "Tagline", type: "text" },
            { key: "backgroundImage", label: "Background Image", type: "image" },
            { key: "form.title", label: "Form Title", type: "text" },
            { key: "form.subtitle", label: "Form Subtitle", type: "text" },
            { key: "form.submitButton", label: "Submit Button Text", type: "text" },
        ],
        info: [
            { key: "balanceTransfer.image", label: "Balance Transfer Image", type: "image" },
            { key: "balanceTransfer.badge", label: "Balance Transfer Badge", type: "text" },
            { key: "balanceTransfer.heading", label: "Balance Transfer Heading", type: "textarea" },
            { key: "balanceTransfer.paragraph", label: "Balance Transfer Paragraph", type: "textarea" },
            { key: "topUp.image", label: "Top-Up Image", type: "image" },
            { key: "topUp.badge", label: "Top-Up Badge", type: "text" },
            { key: "topUp.heading", label: "Top-Up Heading", type: "textarea" },
            { key: "topUp.paragraph", label: "Top-Up Paragraph", type: "textarea" },
            { key: "whoCanBenefit.heading", label: "Who Can Benefit Heading", type: "text" },
            { key: "whoCanBenefit.subtext", label: "Who Can Benefit Subtext", type: "text" },
            {
                key: "whoCanBenefit.items", label: "Who Can Benefit Items", type: "array",
                fields: [
                    { key: "value", label: "Item", type: "text" },
                ],
            },
        ],
        faq: [
            {
                key: "items", label: "FAQs", type: "array",
                fields: [
                    { key: "question", label: "Question", type: "text" },
                    { key: "answer", label: "Answer", type: "textarea" },
                ],
            },
        ],
    },

    "non-residential-premises": {
        hero: [
            { key: "badge", label: "Badge", type: "text" },
            { key: "heading", label: "Heading", type: "textarea" },
            { key: "tagline", label: "Tagline", type: "text" },
            { key: "backgroundImage", label: "Background Image", type: "image" },
            { key: "form.title", label: "Form Title", type: "text" },
            { key: "form.subtitle", label: "Form Subtitle", type: "text" },
            { key: "form.submitButton", label: "Submit Button Text", type: "text" },
        ],
        info: [
            { key: "image", label: "Image", type: "image" },
            { key: "badge", label: "Badge", type: "text" },
            { key: "heading", label: "Heading", type: "textarea" },
            { key: "paragraph", label: "Paragraph", type: "textarea" },
            { key: "eligibility.heading", label: "Eligibility Heading", type: "text" },
            { key: "eligibility.subtext", label: "Eligibility Subtext", type: "text" },
            {
                key: "eligibility.items", label: "Eligibility Items", type: "array",
                fields: [
                    { key: "value", label: "Item", type: "text" },
                ],
            },
        ],
        faq: [
            {
                key: "items", label: "FAQs", type: "array",
                fields: [
                    { key: "question", label: "Question", type: "text" },
                    { key: "answer", label: "Answer", type: "textarea" },
                ],
            },
        ],
    },

    "loan-against-rentals": {
        hero: [
            { key: "badge", label: "Badge", type: "text" },
            { key: "heading", label: "Heading", type: "textarea" },
            { key: "tagline", label: "Tagline", type: "text" },
            { key: "backgroundImage", label: "Background Image", type: "image" },
            { key: "form.title", label: "Form Title", type: "text" },
            { key: "form.subtitle", label: "Form Subtitle", type: "text" },
            { key: "form.submitButton", label: "Submit Button Text", type: "text" },
        ],
        info: [
            { key: "image", label: "Image", type: "image" },
            { key: "badge", label: "Badge", type: "text" },
            { key: "heading", label: "Heading", type: "textarea" },
            { key: "paragraph", label: "Paragraph", type: "textarea" },
            { key: "eligibility.heading", label: "Eligibility Heading", type: "text" },
            { key: "eligibility.subtext", label: "Eligibility Subtext", type: "text" },
            {
                key: "eligibility.items", label: "Eligibility Items", type: "array",
                fields: [
                    { key: "value", label: "Item", type: "text" },
                ],
            },
        ],
        faq: [
            {
                key: "items", label: "FAQs", type: "array",
                fields: [
                    { key: "question", label: "Question", type: "text" },
                    { key: "answer", label: "Answer", type: "textarea" },
                ],
            },
        ],
    },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

// Read a dot-notated key from an object: "form.title" → obj.form.title
function getNestedValue(obj, key) {
    return key.split(".").reduce((acc, k) => acc?.[k], obj);
}

// Immutably set a dot-notated key in an object
function setNestedValue(obj, key, value) {
    return produce(obj, (draft) => {
        const keys = key.split(".");
        let cur = draft;
        for (let i = 0; i < keys.length - 1; i++) {
            cur = cur[keys[i]];
        }
        cur[keys[keys.length - 1]] = value;
    });
}

// ─── Reusable primitives ──────────────────────────────────────────────────────

function Section({ title, children }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border p-6 space-y-5">
            <h2 className="font-playfair text-lg font-bold border-b pb-3" style={{ color: "#0B2E6F" }}>
                {title}
            </h2>
            {children}
        </div>
    );
}

function Field({ label, children }) {
    return (
        <div className="space-y-1.5">
            <label className="block text-xs font-medium text-gray-500">{label}</label>
            {children}
        </div>
    );
}

function Input({ value, onChange }) {
    return (
        <input
            type="text"
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-3 py-2.5 text-sm rounded-lg border outline-none focus:border-blue-400"
            style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: "#333" }}
        />
    );
}

function Textarea({ value, onChange }) {
    return (
        <textarea
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value)}
            rows={3}
            className="w-full px-3 py-2.5 text-sm rounded-lg border outline-none focus:border-blue-400 resize-none"
            style={{ borderColor: "#e2e8f0", background: "#f8fafc", color: "#333" }}
        />
    );
}

function ImageUpload({ filename, onUpload }) {
    return (
        <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 bg-gray-100 px-3 py-2 rounded-lg">{filename}</span>
            <label className="cursor-pointer px-4 py-2 rounded-lg text-xs font-semibold text-white" style={{ background: "#0B2E6F" }}>
                Replace Image
                <input type="file" accept="image/*" className="hidden" onChange={onUpload} />
            </label>
        </div>
    );
}

// ─── Dynamic Tab Renderer ────────────────────────────────────────────────────

export default function DynamicTabRenderer({ activePage, activeTab, content, setContent, handleImageUpload }) {
    const schema = pageSchemas[activePage];
    if (!schema) return <div className="text-gray-400 text-sm">No schema defined for this page.</div>;

    const tabSchema = schema[activeTab];
    if (!tabSchema) return <div className="text-gray-400 text-sm">No schema for this tab.</div>;

    const sectionTitle = activeTab.charAt(0).toUpperCase() + activeTab.slice(1) + " Section";

    return (
        <Section title={sectionTitle}>
            {tabSchema.map((field) => {
                // Array field
                if (field.type === "array") {
                    const items = content?.[field.key] ?? [];
                    return (
                        <div key={field.key} className="space-y-4">
                            <p className="text-sm font-semibold text-gray-600">{field.label}</p>
                            {items.map((item, i) => (
                                <div key={i} className="border rounded-xl p-4 space-y-3 bg-gray-50">
                                    {field.fields.map((subField) => (
                                        <Field key={subField.key} label={`${field.label.slice(0, -1)} ${i + 1} — ${subField.label}`}>
                                            {subField.type === "textarea" ? (
                                                <Textarea
                                                    value={item[subField.key]}
                                                    onChange={(v) => {
                                                        const updated = [...items];
                                                        updated[i] = { ...updated[i], [subField.key]: v };
                                                        setContent({ ...content, [field.key]: updated });
                                                    }}
                                                />
                                            ) : (
                                                <Input
                                                    value={item[subField.key]}
                                                    onChange={(v) => {
                                                        const updated = [...items];
                                                        updated[i] = { ...updated[i], [subField.key]: v };
                                                        setContent({ ...content, [field.key]: updated });
                                                    }}
                                                />
                                            )}
                                        </Field>
                                    ))}
                                </div>
                            ))}
                        </div>
                    );
                }

                // Image field
                if (field.type === "image") {
                    const val = getNestedValue(content, field.key);
                    return (
                        <Field key={field.key} label={field.label}>
                            <ImageUpload
                                filename={val}
                                onUpload={(e) => handleImageUpload(e, val)}
                            />
                        </Field>
                    );
                }

                // Text / Textarea field (supports dot notation keys)
                const val = getNestedValue(content, field.key);
                return (
                    <Field key={field.key} label={field.label}>
                        {field.type === "textarea" ? (
                            <Textarea
                                value={val}
                                onChange={(v) => setContent(setNestedValue(content, field.key, v))}
                            />
                        ) : (
                            <Input
                                value={val}
                                onChange={(v) => setContent(setNestedValue(content, field.key, v))}
                            />
                        )}
                    </Field>
                );
            })}
        </Section>
    );
}