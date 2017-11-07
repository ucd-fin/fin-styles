import "@polymer/polymer/lib/elements/shared-style"
import "@polymer/paper-styles/typography"
import styles from "./shared-styles.html"

let styleWrapper = document.createElement('div');
styleWrapper.style.display = 'none';
styleWrapper.innerHTML = styles;
document.head.appendChild(styleWrapper);