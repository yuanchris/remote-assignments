function delayedResultPromise(n1, n2, delayTime) {
    // your code here …
    
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(n1 + n2), delayTime);         
      });
    }

//delayedResultPromise(4, 5 , 3000).then(console.log); // 9 (4+5) will be shown in the console after 3 seconds

async function main() {
    // your code here, you should call delayedResultPromise here and get the resultusing async/await.
    console.log(await delayedResultPromise(4, 5, 3000));


    // const delay = function(s){
    //     return new Promise(function(resolve)     // 回傳一個 promise
    //     {                                     
    //       setTimeout(resolve,s);               // 等待多少秒之後 resolve()
    //     });
    //   };
    // await delay(1)
   }
main(); // result will be shown in the console after <delayTime> seconds


/*  Reference:
function promise() {
    return new Promise((resolve, reject) => {
      // 隨機取得 0 or 1
      const num = Math.random() > 0.5 ? 1 : 0;
  
      // 1 則執行 resolve，否則執行 reject
      if (num) { 
        resolve('成功');
      }
      reject('失敗')
    });
  }

  promise().then(
      (success) => {console.log(success);}, 
      (fail) => {console.log(fail);}
      ) 


const p = new Promise();

p.then();    // Promise 回傳正確
p.catch();   // Promise 回傳失敗
p.finally(); // 非同步執行完畢（無論是否正確完成）

new Promise(function(resolve, reject) { 
	resolve(); // 正確完成的回傳方法
	reject();  // 失敗的回傳方法
});

pending：事件已經運行中，尚未取得結果
resolved：事件已經執行完畢且成功操作，回傳 resolve 的結果（該承諾已經被實現 fulfilled）
rejected：事件已經執行完畢但操作失敗，回傳 rejected 的結果 
*/