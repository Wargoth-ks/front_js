const e=`<div class="modal-content login-form">
                <span class="close" id="loginClose">&times;</span>
                <h2 class="modal-title">Login</h2>
                <form class="form">
                    <label for="loginEmail">Email:</label>
                    <input type="email" id="loginEmail" name="email" required>
                    <label for="loginPassword">Password:</label>
                    <input type="password" id="loginPassword" name="password" required>
                    <button type="submit">Login</button>
                </form>
            </div>`,i=`<div class="modal-content">
                <span class="close" id="registerClose">&times;</span>
                <h2 class="modal-title">Register</h2>
                <form class="form">
                    <label for="registerEmail">Email:</label>
                    <input type="email" id="registerEmail" name="email" required>
                    <label for="registerPassword">Password:</label>
                    <input type="password" id="registerPassword" name="password" required>
                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required>
                    <div class="checkbox-container">
                        <label for="avatarImg">Choose image (optional):</label>
                        <input type="checkbox" id="idCheckBox">
                    </div>
                    <input disabled type="file" name="avatar" id="inputImg" accept="image/png">
                    <button type="submit">Register</button>
                </form>
            </div>`,a=document.querySelectorAll(".js-btns"),s=document.querySelectorAll(".modal");function o(e){e.style.display="none",e.innerHTML=""}a.forEach((a,t)=>{let l=s[t];a.addEventListener("click",()=>{switch(l.style.display="block",t){case 0:l.insertAdjacentHTML("afterbegin",e);break;case 1:l.insertAdjacentHTML("afterbegin",i),function(){let e=document.querySelector("#inputImg");document.querySelector("#idCheckBox").addEventListener("click",function(){e.disabled=!this.checked})}();break;default:console.dir(t)}(function(e){e.querySelector(".close").addEventListener("click",()=>{o(e)})})(l),document.addEventListener("keydown",e=>{"Escape"===e.code&&o(l)})})});
//# sourceMappingURL=index.7f00cd59.js.map
