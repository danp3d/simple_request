# simple_request
(very) simple wrapper around the 'request' package to ensure it returns promises (using Q).

Install package:
```

    npm install git+https://github.com/danp3d/simple_request.git
    
```

Usage:
```javascript
    
    const simple_request = require('simple_request')

    request('http://jsonplaceholder.typicode.com/posts/1', { json: true }).then((res) => {
        let response = res[0]
        let body = res[1]
        
        if (response.statusCode === 200)
            console.log('Success!')
            
        console.log(body)
    }).catch(logError)
```

## Methods
- get
- post
- put
- del


Yep, that's all it does.