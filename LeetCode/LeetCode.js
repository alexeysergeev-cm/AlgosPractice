
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