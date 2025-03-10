// src/Tiptap.tsx
import {
  useEditor,
  EditorContent,
  FloatingMenu,
  BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { PlusIcon } from "lucide-react";
import ToolMenu from "./bubble-menu";
import Underline from "@tiptap/extension-underline";
import { TextAlign } from "@tiptap/extension-text-align";
import { Strike } from "@tiptap/extension-strike";
import { Superscript } from "@tiptap/extension-superscript";
import { Subscript } from "@tiptap/extension-subscript";
import CustomImage from "./custom-nodes/image/image-extension";
import { SlashCommands } from "./plugins/slash-commands";
import { suggestion } from "./slash/suggestion";
import { ImageUploadPlugin } from "./plugins/image-upload";
import FloatingMenuToolbar from "./floating-menu";
import { useEffect } from "react";

// define your extension array
const extensions = [
  StarterKit,
  Underline,
  TextAlign.configure({
    types: ["paragraph", "heading"], // Specify the types you want to enable text align on
  }),
  Strike,
  Superscript,
  Subscript,
  CustomImage,
  SlashCommands.configure({
    suggestion,
  }),
  ImageUploadPlugin,
];

const content =
  "<h1>Hello World!</h1> <p>hey world lets see the way you dont know to see in this world having the way to use the callibre of a human being it so enthugistic to look forward in the hello world.</p>";

const Tiptap = () => {
  const editor = useEditor({
    extensions,

    content,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none text-roboto",
      },
    },
  });

  return (
    <>
      <EditorContent editor={editor} />
      {editor && <FloatingMenuToolbar editor={editor} />}
      {editor && <ToolMenu editor={editor} />}
    </>
  );
};

export default Tiptap;
