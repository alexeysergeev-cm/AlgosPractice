
// SQL update salary

```
UPDATE salary 
SET 
    sex = CASE sex
        WHEN 'm' THEN 'f'
        ELSE 'm'
    END;
```

```
UPDATE salary
SET sex = IF(sex = 'm', 'f', 'm')
```


/// halves alike

var halvesAreAlike = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    
    let mid = s.length / 2
    let count = 0
    s.slice(0, mid).split('').forEach(ele => {if (vowels.includes(ele)) count++})
    s.slice(mid).split('').forEach(ele => {if (vowels.includes(ele)) count--})
    
    return count === 0
};


//workd on valid Ip adress

var validIPAddress = function(IP) {
    let myIp = IP.includes('.') ? '4' : IP.includes(':') ? '6' : 'Neither';

    let final = ''
    if (myIp === '4'){
        IP.split('.').forEach(ele => {
            if (ele.length > 1 && ele[0] === '0') final = 'Neither';
        })
        if (final === 'Neither') return final;
        
        let res = IP.split('.').every(ele => (ele >= 0 && ele <= 255))
        if (res) final = 'IPv4'
    }
    
    return final
};