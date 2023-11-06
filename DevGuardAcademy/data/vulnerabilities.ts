import { Deck } from "../store/types";

export const vulnerabilitiesDeck: Deck = {
  id: '0', 
  title: "Vulnerabilities",
  cards: [

  {
    id: "1",
    question: "SQL Injection",
    answer: "A type of attack where the attacker manipulates a SQL query. Prevent it by using prepared statements and parameterized queries."
  },
  {
    id: "2",
    question: "Cross-Site Scripting (XSS)",
    answer: "Occurs when attackers inject malicious scripts into content from trusted websites. Mitigate by validating and escaping user input."
  },
  {
    id: "3",
    question: "Cross-Site Request Forgery (CSRF)",
    answer: "An attack that forces an end user to execute unwanted actions. Prevent with anti-CSRF tokens and same-site cookies."
  },
  {
    id: "4",
    question: "Public Key Cryptography",
    answer: "A cryptographic system that uses pairs of keys: public keys (openly shared) and private keys (kept secret). Used for secure data transmission."
  },
  {
    id: "5",
    question: "Principle of Least Privilege",
    answer: "Each user or program should have the least privileges necessary to perform their tasks, reducing the scope of potential damage."
  },
  {
    id: "6",
    question: "Secure Sockets Layer (SSL)/Transport Layer Security (TLS)",
    answer: "Protocols for securing communications over a computer network. Websites should use HTTPS to ensure data is encrypted in transit."
  },
  {
    id: "7",
    question: "Two-Factor Authentication (2FA)",
    answer: "An extra layer of security used to ensure that people trying to access an online account are who they say they are."
  },
  {
    id: "8",
    question: "Password Hashing",
    answer: "Transforms a password into another form, a 'hash', to secure password storage. Use strong hashing algorithms like bcrypt."
  },
  {
    id: "9",
    question: "Session Management",
    answer: "Securely managing user sessions is critical. Implement timeouts, re-authentication for sensitive features, and secure cookie settings."
  },
  {
    id: "10",
    question: "Input Validation",
    answer: "Ensuring only properly formatted data is entered into a system. Helps mitigate a variety of injections and attacks."
  }

  ]
}