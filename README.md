# order-system

一個基於 Vue 3 、Nuxt 構建的訂餐網站，並運用 Firebase 提供的身份驗證和資料存儲服務設計出登入等其他功能。

<a name="table-of-contents"></a>

## 目錄

1. [內容](#content)
1. [使用工具](#resources)

<a name="content"></a>

## 內容

-   [1.1](#1.1) <a name='1.1'></a> **產品展示**：<br>
    將所有後台上傳的產品劃分為精致主餐、精選小點、營養沙拉等五個部分類別，可透過點擊不同類別的按鈕呈現不同分類的商品。

-   [1.2](#1.2) <a name='1.2'></a> **登入/註冊**：<br>

    -   註冊：新用戶可通過提供必要的註冊信息（提供郵箱及密碼）來創建帳戶。
    -   登入：用戶可通過郵箱及密碼進行登入，以便訪問訂餐系統，且可以看到先前的購物車記錄。
    -   管理員：唯有管理員登入才能看到後台管理訂餐系統，一般用戶只能訪問一般訂餐系統。
        -   管理員賬號：<anna1114@gmail.com> ; 密碼：rewq570815

-   [1.3](#1.3) <a name='1.3'></a> **個人化購物車**：<br>
    可從商品列表中添加商品到購物車，而當前購物車的情況，可在所有頁面中透過 navbar 右上角的 icon 確認。而且每位用戶都擁有獨立的購物車，確保隱私和購物獨立性。即使在同一設備上切換賬號，用戶只能查看和管理自己的購物車內容，不會看到其他用戶的記錄。

**[⬆ 回到頂端](#table-of-contents)**

<a name="resources"></a>

## 使用工具

-   [2.1](#2.1) <a name='2.1'></a> **Nuxt**：<br>
    使用 Nuxt 是因它提供強大的路由管理功能，透過 Nuxt 可以更容易地構建服務器渲染，省去繁瑣的配置，提升開發效率。
-   [2.2](#2.2) <a name='2.2'></a> **Firebase**：<br>
    使用 Firebase 作為後端服務，包括身份驗證、數據庫存儲等功能，確保購物車數據的安全性和即時性。

-   [2.3](#2.3) <a name='2.3'></a> **Pinia**：<br>
    使用 Pinia 作為狀態管理工具。通過引入 Pinia，能夠更加有效地組織和共享應用程序的狀態，使代碼結構更加清晰，同時保持了代碼的整潔。

-   [2.4](#2.4) <a name='2.4'></a> **Tailwind**：<br>
    使用 Tailwind 的原子化 class 來拼裝樣式，並利用其響應式、hover、focus 等不同情況下方便的樣式設置來快速開發專案。

    [2.5](#2.5) <a name='2.5'></a> **Element Plus**：<br>
    使用 Element Plus 中的 Button、Input、Dialog 等元件，應對不同設計需求按需引入，能夠更快速地構建出符合需求的頁面。

    [2.6](#2.6) <a name='2.6'></a> **Animate.css**：<br>
    Animate 提供豐富的 CSS 動畫效果，無需編寫複雜的代碼，簡化動畫開發，即可擁有的互動體驗。

**[⬆ 回到頂端](#table-of-contents)**
