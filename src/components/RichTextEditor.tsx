"use client";

import { useRef, useEffect } from "react";
import { FiBold, FiItalic, FiUnderline, FiList } from "react-icons/fi";

interface Props {
  value: string;
  onChange: (html: string) => void;
  minHeight?: number;
  placeholder?: string;
}

/**
 * Lightweight WYSIWYG editor (contentEditable) that emits HTML.
 * Toolbar: bold, italic, underline, bullet list, font size, clear formatting.
 */
export default function RichTextEditor({ value, onChange, minHeight = 120, placeholder }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // Sync external value into the editor, but never while the user is typing
  // in it (that would reset the caret to the start).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (document.activeElement === el) return;
    const next = value || "";
    if (el.innerHTML !== next) el.innerHTML = next;
  }, [value]);

  const emit = () => {
    if (ref.current) onChange(ref.current.innerHTML);
  };

  const exec = (command: string, arg?: string) => {
    ref.current?.focus();
    document.execCommand(command, false, arg);
    emit();
  };

  const toolBtn =
    "w-8 h-8 flex items-center justify-center rounded-md text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface-light)] transition-colors";
  const sep = "w-px h-5 bg-[var(--color-border)] mx-1";

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden focus-within:border-[var(--color-primary)]/40 focus-within:ring-1 focus-within:ring-[var(--color-primary)]/20 transition-all">
      <div className="flex items-center gap-1 px-2 py-1.5 border-b border-[var(--color-border)] bg-[var(--color-surface-light)]/50 flex-wrap">
        <button type="button" title="Gras" className={toolBtn} onMouseDown={(e) => { e.preventDefault(); exec("bold"); }}><FiBold size={14} /></button>
        <button type="button" title="Italique" className={toolBtn} onMouseDown={(e) => { e.preventDefault(); exec("italic"); }}><FiItalic size={14} /></button>
        <button type="button" title="Souligné" className={toolBtn} onMouseDown={(e) => { e.preventDefault(); exec("underline"); }}><FiUnderline size={14} /></button>
        <span className={sep} />
        <button type="button" title="Liste à puces" className={toolBtn} onMouseDown={(e) => { e.preventDefault(); exec("insertUnorderedList"); }}><FiList size={14} /></button>
        <span className={sep} />
        <select
          title="Taille du texte"
          className="h-8 rounded-md bg-transparent text-xs text-[var(--color-muted)] px-1 border-0 focus:outline-none cursor-pointer"
          value=""
          onChange={(e) => { if (e.target.value) exec("fontSize", e.target.value); }}
        >
          <option value="" disabled>Taille</option>
          <option value="2">Petit</option>
          <option value="3">Normal</option>
          <option value="5">Grand</option>
          <option value="6">Très grand</option>
        </select>
        <span className={sep} />
        <button type="button" title="Effacer le formatage" className={toolBtn + " text-[11px] font-medium"} onMouseDown={(e) => { e.preventDefault(); exec("removeFormat"); }}>Tx</button>
      </div>
      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        onInput={emit}
        onBlur={emit}
        data-placeholder={placeholder || ""}
        className="rich-input px-4 py-3 text-sm text-[var(--color-foreground)] leading-relaxed focus:outline-none"
        style={{ minHeight }}
      />
    </div>
  );
}
