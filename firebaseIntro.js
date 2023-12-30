// 列舉使用的api
// 會使用到 firebase 中的兩個模組 "firebase/auth" "firebase/database"

// import * as firebaseAuth from "firebase/auth";

// 回傳應用的 Auth 實例物件
const auth = firebaseAuth.getAuth();

// 屬性:
// 獲取當前用戶信息
console.log(auth.currentUser);

// 方法:
// 1. 註冊帳號
firebaseAuth
    .createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// 2. 登入帳號
firebaseAuth
    .signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// 3. 登出帳號
firebaseAuth
    .signOut(auth)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// 4. 監聽當前用戶信息變動，每次變動(登入/登出)，都會觸發回調
firebaseAuth.onAuthStateChanged(auth, (user) => {
    if (user) {
        // 有用戶信息(登入)
    } else {
        // 無用戶信息(登出)
    }
});

// import * as firebaseDb from "firebase/database";

// 回傳應用的 Database 實例物件
const db = firebaseDb.getDatabase();

// 方法:   新增&更新：set / push / update   刪除：set / remove
// 1. 獲得資料庫中對應該路徑的參考(reference), 該方法會作為其他方法的參數使用
firebaseDb.ref(db, "某路徑");

// 2. set資料庫某路徑下的資料
const someName = ref('')
const someSex = ref('')
firebaseDb.set(firebaseDb.ref(db, "某路徑"), {
    someName.value,
    someSex.value,
});

// 3. get資料庫某路徑下的資料
firebaseDb.get(firebaseDb.ref(db, "某路徑"))
    .then((snapshot) => {
        if(snapshot.exists()) {
            const data = snapshot.val()
        } else {
            console.log('no data')
        }
    })
    .catch((error) => {
        console.error(error);
    });

// 4. 監聽資料庫某路徑下的資料，預設初始會執行一次
firebaseDb.onValue(firebaseDb.ref(db, "某路徑"), (snapshot) => {
  const data = snapshot.val();
});

// 5.
firebaseDb.off(firebaseDb.ref(db, "某路徑"))


// https://medium.com/@erickuo801204/firebase%E7%AD%86%E8%A8%98-2-storage-%E5%84%B2%E5%AD%98-647ad5aed741