import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import styles from './PostAnnounce.module.css';

function Editor() {
  return (
    <div className={styles.editor}>
      <CKEditor editor={ClassicEditor} />
    </div>
  );
}

export default Editor;