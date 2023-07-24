import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Bold = ({ children }) => <span className="bold">{children}</span>;

const Text = ({ children }) => <p className="text-center">{children}</p>;

//  MARKS: inline elements, such as bold and italic text
// BLOCKS: block-level elements in the content, such as paragraphs and headings
const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-base">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-2xl font-bold my-5">{children}</h2>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className="text-lg font-bold my-3">{children}</h6>
    ),
    // [BLOCKS.UL_LIST]: (node, children) => (
    //   <ul className="text-lg font-bold my-3">{children}</ul>
    // ),
    // [BLOCKS.LIST_ITEM]: (node, children) => (
    //   <li className="text-lg font-bold my-3">{children}</li>
    // ),
  },
  renderText: (text) => text.replace('!', '?'),
};
import React from 'react';

const RichText = ({ document }) => {
  return documentToReactComponents(document, options);
};

export default RichText;
