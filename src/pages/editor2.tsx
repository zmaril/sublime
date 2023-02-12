import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import estyles from "@/styles/Editor.module.css";
import Footer from "../components/footer";

import { RichTextEditor, Link } from "@mantine/tiptap";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Gapcursor from "@tiptap/extension-gapcursor";
import Paragraph from "@tiptap/extension-paragraph";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Text from "@tiptap/extension-text";
import React from "react";


const inter = Inter({ subsets: ["latin"] });

function Editor() {}

export default function Home() {
  console.log(estyles.tableeditor);
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Gapcursor,
      Table.configure({
        HTMLAttributes: {class: estyles.tableeditor},
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: `
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>singer</td>
              <td>songwriter</td>
              <td>actress</td>
            </tr>
          </tbody>
        </table>
      `,
  });

  if (!editor) {
    return null;
  }
  return (
    <>
      <main className={styles.main}>
        <button
          onClick={() =>
            editor
              .chain()
              .focus()
              .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
              .run()
          }
        >
          insertTable
        </button>
        <button onClick={() => editor.chain().focus().addColumnBefore().run()}>
          addColumnBefore
        </button>
        <button onClick={() => editor.chain().focus().addColumnAfter().run()}>
          addColumnAfter
        </button>
        <button onClick={() => editor.chain().focus().deleteColumn().run()}>
          deleteColumn
        </button>
        <button onClick={() => editor.chain().focus().addRowBefore().run()}>
          addRowBefore
        </button>
        <button onClick={() => editor.chain().focus().addRowAfter().run()}>
          addRowAfter
        </button>
        <button onClick={() => editor.chain().focus().deleteRow().run()}>
          deleteRow
        </button>
        <button onClick={() => editor.chain().focus().deleteTable().run()}>
          deleteTable
        </button>
        <button onClick={() => editor.chain().focus().mergeCells().run()}>
          mergeCells
        </button>
        <button onClick={() => editor.chain().focus().splitCell().run()}>
          splitCell
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeaderColumn().run()}
        >
          toggleHeaderColumn
        </button>
        <button onClick={() => editor.chain().focus().toggleHeaderRow().run()}>
          toggleHeaderRow
        </button>
        <button onClick={() => editor.chain().focus().toggleHeaderCell().run()}>
          toggleHeaderCell
        </button>
        <button onClick={() => editor.chain().focus().mergeOrSplit().run()}>
          mergeOrSplit
        </button>
        <button
          onClick={() =>
            editor.chain().focus().setCellAttribute("colspan", 2).run()
          }
        >
          setCellAttribute
        </button>
        <button onClick={() => editor.chain().focus().fixTables().run()}>
          fixTables
        </button>
        <button onClick={() => editor.chain().focus().goToNextCell().run()}>
          goToNextCell
        </button>
        <button onClick={() => editor.chain().focus().goToPreviousCell().run()}>
          goToPreviousCell
        </button>

        <EditorContent editor={editor} />
      </main>
    </>
  );
};