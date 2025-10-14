'use client';

import { useEffect, useRef } from "react";
import { Quill } from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

interface Props {
  value: string,
  onChange: (value: string) => void;
}

export default function TextEditor({
  value = "",
  onChange
}: Props) {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: {
            container: [
              [{ 'header': [1, 2, false] }],
              ["bold", "italic", "underline", "strike", "blockquote"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image"],
              ["clean"],
            ],
            handlers: {
              image: imageHandler,
            }
          },
        },
      });

      quillRef.current = quill;

      quill.on("text-change", () => {
        onChange(quill.root.innerHTML);
      });

      if (value) {
        quill.root.innerHTML = value;
      }
      
      function imageHandler() {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.click();
        
        input.onchange = async () => {
          const file = input.files?.[0];
          if (!file) return;
          
          const formData = new FormData();
          formData.append("file", file);
          
          const res = await fetch("api/upload", {
            method: "POST",
            body: formData,
          });
          if (!res.ok) return console.error("Erro ao enviar imagem");
          
          const data = await res.json();
          const range = quill.getSelection(true);
          quill.insertEmbed(range.index, "image", data.url);
        };
      }
    }
  }, [value, onChange]);

  return (
    <div className="quill">
      <div ref={editorRef} />
    </div>
  );
}