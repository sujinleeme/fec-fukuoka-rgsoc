import { future } from 'mdx-deck/themes'

export default {
  // extends the default theme
  ...future,
  // add a custom font
  font: 'Roboto, sans-serif',
  h1: {
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontSize: '1.5em',
  },
  h2: {
    fontSize: '1em',
    marginTop: '2em',
    textTransform: 'none',
  },
  p: {
    fontSize: '0.65em',
    margin: '0.4em 0',
    lineHeight: '1.5em'
  },
  ul: {
    marginTop: 0
  },
  li: {
    fontSize: '0.45em',
    margin: '0.4em 0',
    lineHeight: '1.5em'
  },

  colors: {
    text: '#000',
    background: '#fff',
    link: '#305f6b',
  }
}
