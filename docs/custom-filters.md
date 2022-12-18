# Custom filters

Custom filters are implemented in JavaScript.

!!! attention

    :octicons-beaker-24: Coming soon

You can add custom filters by editing the `.cm/filters.js` file in your repo.

```
.
├─ .cm/
│  └─ gitstream.cm
│  └─ filters.js 
```

####  Adding filters

Filters can have input arguments and return a result which can be any valid JavaScript type.

An example for a `.cm/filters.js`:

```js
export default {
  // The includes() method determines whether an array includes a 
  // certain value among its entries, returning true or false.
  myIncludes: (list, term) => {
    return list.includes(term);
  },
  
  // Determine if a number is even or odd
  isOdd: (n) => {
    return parseInt(n) % 2 == 0;
  }
}
```

Once filters are added it can be used in the `.cm` files, for example using `isOdd` filter looks like this:

```yaml+jinja
{{ branch.diff.size | isOdd }}
```

#### Using npm packages 

The file is loaded by a node.js runtime, the following packages are pre installed and can be imported and used:

- `child_process`

#### Using external tools results

Tip: cache result to local file system and reuse in CI/CD

```js
const { exec } = require('child_process');

exec('npm run test | wc -l', (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }

  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
  return 123;
});

```

For example:

```yaml+jinja
# access coverage results
coverage:
  is:
    # npm run test -> /file/here 
    enough: {{ source | my_coverage > 80 }} # 2 user's filter 
```


