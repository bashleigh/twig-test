# Twig Test

From the example provided, I presumed the given number was the desired output of chunks and the array provided was to be chunked. Reminded me of binary handling with C++ and the serial port for connecting to microcontrollers over a bus.

### Install

I prefer yarn over npm but feel free to use npm if you wish! Only dependancies are tsc, prettier and jest

```bash
$ yarn
```

### Testing

Run the jest tests

```bash
$ yarn test
```

I've provided some basic tests. The results are not entirely desirable so I may come back and resolve some issues.

## Commenting

I usually don't comment my code a lot? Line by line anyway, I sometimes use comment blocks on the top of functions if I feel them necessary. I use git a lot to portrait the comments of lines or code blocks if required. 
Comment blocks in TypeScript provide IDE syntax highlighting snippets which is why I use them, specially for packages. 


## Improvements

I did try reversing the array so that if there was an overlap of values, the first array would contain the overlap but the values were then reversed as `[[2,1],[4,3], [5]]` which I didn't want to provide. As of right now I want to resolve the issue with the `reverse stress` test where the result is `[[], [], [], [], [], [], [], [1]]` where an array of 8 chunks is required from an array provided of length 1. I think this would come down to requirements? 
