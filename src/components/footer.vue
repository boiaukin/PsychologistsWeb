<template>
    <footer>
        <div class="links-section">
            <div class="links">
                <a href="">官方網站</a>
                <a class="link" href="">關於我們</a>
                <a class="link" href="">聯絡我們</a>
                <a href="">隱私權保護條款</a>
            </div>
            <hr>
            <div class="info">
                <p>© Bô Iàu-kín</p>
                <p> All Rights Reserved</p>
            </div>
        </div>
        <div class="subscription">
            <div class="subscription-p">訂閱我們獲得第一手資訊!</div> 
            <div class="user-input">
                <input type="text" placeholder="輸入信箱地址">
                <button>訂閱</button>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer{
    width: 100%;
    height: 408px;
    background-color: #44220B;
    display: flex;

}
/* links */
.links-section{
    flex: 1.26;
    margin-top: 101px;
    display: flex;
    flex-direction: column;
    align-items: center;
   
}
.links{
    display: flex;
    
}
a{
    text-decoration:none;
    font-size: 22px;
    margin: 0px 40px 0px;
    color: #fff;
  
    
}
hr{
    width: 660.92px;
    margin-top: 23px;
    
}
.info{
    margin-top: 40px;
}
p{
    text-align: center;
    font-size: 24px;
    color: #fff;
}


/* subscription */
.subscription{
    flex:1;
    padding: 114.5px 0px 0px 66px;
    position: relative;

}
.subscription::before{
    content: "";
    display: block;
    background-color: #fff;
    width: 288px;
    height: 2px;
    position: absolute;
    transform: rotate(90deg);
    top: 200px;
    left: -150px;
}
.subscription-p{
    font-size: 30px;
    color: #fff;
}
.user-input{
    display: flex;
    margin-top: 10px;
}
input{
    width: 346px;
    height: 70px;
    font-size: 24px;
    padding: 5px 0px 0px 20px;
}
button{
   
    width: 126px;
    height: 70px;
    background-color: #C6744A;
    color: #fff;
    border: none;
    margin-left: 20px;
    font-size: 24px;
    
}
</style>