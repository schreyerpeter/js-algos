// Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

// Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

class PrefixTreeNode {
  constructor(value) {
    this.value = value;
    this.children = {};
    this.endWord = null;
  }

  add(word) {
    if (!word.length) return;
    const [first, ...rest] = word;
    if (!this.children[first]) {
      this.children[first] = new PrefixTreeNode(first);
    }
    if (!rest.length) {
      this.endWord = true;
    } else {
      this.children[first].add(rest);
    }
  }

  findMatches(str) {
    const [first, ...rest] = str;
    if (!rest.length) {
      this.endWord = true;
    }
    if (this.children[first]) {
      return this.children[first].findMatches(rest);
    }
    return this.value;
  }
}

function autocomplete(s, words) {
  // Create a trie
  const trie = new PrefixTreeNode('*');
  words.forEach((word) => {
    trie.add(word);
  });
  trie.findMatches(s);
}

module.exports = autocomplete;
