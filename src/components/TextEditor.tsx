'use client';

import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

// Importa dinamicamente o ReactQuill para evitar problemas com SSR
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function TextEditor({
  value,
  onChange
}: Props) {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false]}],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={modules}
      theme="snow"
    />
  );
}