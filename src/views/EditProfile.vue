<template>
    <div class="wrap">
        <div class="header">
            <div class="logo">
                <a href="#" title="">Religram</a>
                <p class="slogan">Heaven in your hands</p>
            </div>
        </div>
        <div class="content">
            <div class="profile">
                <div class="profile-header">
                    <div class="post-user">
                        <div class="post-avatar post-avatar-small">
                            <a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a>
                        </div>
                        <div class="post-userName">
                            <p><a href="#" title="">religram</a></p>
                            <p><a class="btn-change-proflie btn" href="#" title="">Change profile photo</a><a
                                    class="btn-change-pw btn"
                                    href="#"
                                    title="">Change
                                password</a></p>
                        </div>
                    </div>
                </div>
                <div class="profile-content">
                    <div class="form form-change-profile">
                        <form action="" class="change-profile" method="">
                            <label>Name</label>
                            <input class="input-text" id="change_profile_name" name="change-profile-name"
                                   placeholder="Name"
                                   type="text" value="">
                            <label>Username</label>
                            <input class="input-text" id="change_profile_user" name="change-profile-user"
                                   placeholder="Username"
                                   type="text" value="">
                            <label>Email</label>
                            <input class="input-text" id=change_profile_email" name="change-profile-email"
                                   placeholder="Email"
                                   type="text" value="">
                            <button class="btn btn-full" id="change_profil_submit" name="change-profile-submit"
                                    type="submit">Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="post-event">
                <span class="icon-home"><a href="#" title=""><img alt="" src="images/footer-icon-home.png"/></a></span>
                <span class="icon-search"><a href="#" title=""><img alt=""
                                                                    src="images/footer-icon-search.png"/></a></span>
                <span class="icon-plus"><a href="#" title=""><img alt="" src="images/footer-icon-plus.png"/></a></span>
                <span class="post-icon-like"><a href="#" title=""></a></span>
                <span class="icon-my-page"><a href="#" title=""><img alt=""
                                                                     src="images/footer-icon-my-page.png"/></a></span>
            </div>
        </div>
        <div class="message message-success">
            <p>Save successfuly!</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EditProfile"
    }
</script>

<style scoped>

</style>