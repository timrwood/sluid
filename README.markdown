Sluid - Small Locally Unique Identifiers
========================================

Author: Tim Wood

Sluid is a unique base 62 string generator.

Sluid is similar to UUID, only instead of being globally unique, it is locally unique.

### Filesize
<table>
    <tr>
        <th>minified</th>
        <th>gzipped</th>
    </tr>
    <tr>
    	<td>434 bytes</td>
    	<td>380 bytes</td>
    </tr>
</table>

function sluid(baselength)
--------------------------

The function returns a base 62 encoding of the current timestamp plus an 
auto-incrementing, zero-indexed, base 62 suffix. This allows the function 
to be called many times in a millisecond and always return unique values.

The `baselength` parameter will change how long the base of the `sluid` will be. 
The minimum length of the output will be `baselength + 1`, but can be longer 
depending on how many times sluid() is called in a millisecond.

`baselength` should be a number between 3 and 7, and defaults to 7 if an 
invalid value is passed in.

The `baselength` parameter also changes how long the `sluid` is guaranteed to 
be unique. This is because the `sluid` is generated based on the current timestamp.

### Amount of time a `sluid` is guaranteed to be unique
<table>
    <tr>
        <th>baselength</th>
        <th>time</th>
    </tr>
    <tr>
    	<td>3</td>
    	<td>3 minutes and 50 seconds</td>
    </tr>
    <tr>
    	<td>4</td>
    	<td>3 hours, 53 minutes and 20 seconds</td>
    </tr>
    <tr>
    	<td>5</td>
    	<td>10 days, 12 hours, 46 minutes and 40 seconds</td>
    </tr>
    <tr>
    	<td>6</td>
    	<td>648 days, 3 hours, 33 minutes and 20 seconds</td>
    </tr>
    <tr>
    	<td>7</td>
    	<td>40509 days, 6 hours, 13 minutes and 20 seconds</td>
    </tr>
</table>

The reason the lengths of time are so random is because these are the base 10
equivalents of the maximum base 62 value for that `baselength`. 

    // base 62 for baselength of 7
    'ZZZZZZZ'
    // base 10
    3521614606207
    
The numbers are also slightly rounded down for minification.

    // base 10
    3521614606207
    // base 10 rounded down
    35e11
    
### Namespace

By default, sluid is attached to the `window` namespace. To change that, 
simply change the namespace variable passed in at the end of the file to 
whatever namespace you desire

    ...a.sluid=h})(window)
    
Can change to

    ...a.sluid=h})(jQuery)
    
or

    ...a.sluid=h})(_)

Tests
-----

There are a couple of tests in the test/ folder. Check them out. If you think some tests are missing, open an issue, and I'll add it.

Changelog
---------

### 0.1.0

Initial release