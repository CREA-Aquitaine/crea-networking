import React, { useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Container } from 'reactstrap';
import styles from './PostAnnounce.module.css';

function Editor() {
  const [content, setContent] = useState();

  return (
    <div className={styles.editor}>
      <Container>{content}</Container>
      <CKEditor
        editor={ClassicEditor}
        // onChange={handleEditorChange}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
        }}
      />
    </div>
  );
}

export default Editor;
