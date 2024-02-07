type Mark = {
  type: string;
};

type TextNode = {
  text: string;
  type: string;
  marks?: Mark[];
};

type RichTextNode = {
  type: string;
  attrs?: { level: number };
  content?: TextNode[];
};

export type RichTextDoc = {
  type: string;
  content: RichTextNode[];
};

export function convertRichTextToHtml(richText: RichTextDoc): string {
  let html = "";

  const renderText = (textNode: TextNode): string => {
    let textHtml = textNode.text;
    textNode.marks?.forEach((mark) => {
      switch (mark.type) {
        case "bold":
          textHtml = `<strong>${textHtml}</strong>`;
          break;
        case "italic":
          textHtml = `<em>${textHtml}</em>`;
          break;
        // case "h2":
        //   textHtml = `<h2 className="text-xl font-bold font-roboto">${textHtml}</h2>`;
        //   break;
      }
    });
    return textHtml;
  };

  richText.content?.forEach((node) => {
    switch (node.type) {
      case "paragraph":
        html += "<p>";
        node.content?.forEach(
          (contentItem) => (html += renderText(contentItem))
        );
        html += "</p>";
        break;
      case "heading":
        const level = node.attrs?.level || 1; // Default to <h1> if level is undefined.
        html += `<h${level}>`;
        node.content?.forEach(
          (contentItem) => (html += renderText(contentItem))
        );
        html += `</h${level}>`;
        break;
      // Add more cases as needed for other types
    }
  });

  return html;
}

// // Example rich text data
// const richTextExample: RichTextDoc = {
//   type: "doc",
//   content: [
//     {
//       type: "heading",
//       attrs: {
//         level: 2,
//       },
//       content: [
//         {
//           text: "Dette er en overskrift.",
//           type: "text",
//         },
//       ],
//     },
//     {
//       type: "paragraph",
//       content: [
//         {
//           text: "Dette er en fed tekst.",
//           type: "text",
//           marks: [
//             {
//               type: "bold",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       type: "paragraph",
//       content: [
//         {
//           text: "Dette er en kursiv tekst.",
//           type: "text",
//           marks: [
//             {
//               type: "italic",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       type: "paragraph",
//       content: [
//         {
//           text: "Dette er en normal tekst.",
//           type: "text",
//         },
//       ],
//     },
//   ],
// };

// // Converting rich text to HTML
// const htmlOutput = convertRichTextToHtml(richTextExample);
// console.log(htmlOutput);
