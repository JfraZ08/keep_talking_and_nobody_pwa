3 fils ! 
```js
if red=0 cut = 2
if blue>1 cut = last blue
else cut = last

```

4 fils ! 
```js
if red > 1 & last_num_series = impair cut last red
if last = yellow & red = 0 cut first  
if blue === 1 cut first
if yellow > 1 cut last 
else cut last

```
5 fils 
```js
if red = 0 & num_series = impair cut 4
if red === 1  & yellow > 1 cut first
else cut last 
```

6 fils 
```js
if yellow = 0 & num_series = impair cut third
if red = 0 cut last 
else cut four  
```
---

npx expo start --tunnel

