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
                        <div class="post-avatar">
                            <a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a>
                        </div>
                        <div class="post-userName">
                            <p><a href="#" title="">religram</a></p>
                            <p><span @click="loadEditProfile" class="edit-proflie btn" title="">Edit profile</span></p>
                        </div>
                    </div>
                    <div class="post-user__name">
                        <p>Religram name</p>
                    </div>
                </div>
                <div class="profile-content">
                    <div class="tab">
                        <div class="tab-title">
                            <a class="active" href="#" title=""><span>10</span>posts</a>
                            <a href="#" title=""><span>10</span>followers</a>
                            <a href="#" title=""><span>10</span>following</a>
                        </div>
                        <div class="tab-content">
                            <ul class="ul-list-post">
                                <li><a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a></li>
                                <li><a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a></li>
                                <li><a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a></li>
                                <li><a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a></li>
                                <li><a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a></li>
                                <li><a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a></li>
                                <li><a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a></li>
                                <li><a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a></li>
                                <li><a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a></li>
                                <li><a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a></li>
                                <li><a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a></li>
                                <li><a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="tab">
                        <div class="tab-title">
                            <a href="#" title=""><span>10</span>posts</a>
                            <a class="active" href="#" title=""><span>10</span>followers</a>
                            <a href="#" title=""><span>10</span>following</a>
                        </div>
                        <div class="tab-content">
                            <ul class="ul-list-followers">
                                <li>
                                    <div class="post-user">
                                        <div class="post-avatar">
                                            <a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a>
                                        </div>
                                        <div class="post-userName">
                                            <p><a href="#" title="">religram</a></p>
                                            <p>Ha Noi, Viet Nam</p>
                                        </div>
                                    </div>
                                    <a class="btn btn-follow active" href="#" title="">Following</a>
                                </li>
                                <li>
                                    <div class="post-user">
                                        <div class="post-avatar">
                                            <a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a>
                                        </div>
                                        <div class="post-userName">
                                            <p><a href="#" title="">religram</a></p>
                                            <p>Ha Noi, Viet Nam</p>
                                        </div>
                                    </div>
                                    <a class="btn btn-follow" href="#" title="">Follow</a>
                                </li>
                                <li>
                                    <div class="post-user">
                                        <div class="post-avatar">
                                            <a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a>
                                        </div>
                                        <div class="post-userName">
                                            <p><a href="#" title="">religram</a></p>
                                            <p>Ha Noi, Viet Nam</p>
                                        </div>
                                    </div>
                                    <a class="btn btn-follow" href="#" title="">Follow</a>
                                </li>
                                <li>
                                    <div class="post-user">
                                        <div class="post-avatar">
                                            <a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a>
                                        </div>
                                        <div class="post-userName">
                                            <p><a href="#" title="">religram</a></p>
                                            <p>Ha Noi, Viet Nam</p>
                                        </div>
                                    </div>
                                    <a class="btn btn-follow" href="#" title="">Follow</a>
                                </li>
                                <li>
                                    <div class="post-user">
                                        <div class="post-avatar">
                                            <a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a>
                                        </div>
                                        <div class="post-userName">
                                            <p><a href="#" title="">religram</a></p>
                                            <p>Ha Noi, Viet Nam</p>
                                        </div>
                                    </div>
                                    <a class="btn btn-follow" href="#" title="">Follow</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="tab">
                        <div class="tab-title">
                            <a href="#" title=""><span>10</span>posts</a>
                            <a href="#" title=""><span>10</span>followers</a>
                            <a class="active" href="#" title=""><span>10</span>following</a>
                        </div>
                        <div class="tab-content">
                            <ul class="ul-list-followers ul-list-following">
                                <li>
                                    <div class="post-user">
                                        <div class="post-avatar">
                                            <a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a>
                                        </div>
                                        <div class="post-userName">
                                            <p><a href="#" title="">religram</a></p>
                                            <p>Ha Noi, Viet Nam</p>
                                        </div>
                                    </div>
                                    <a class="btn btn-follow active" href="#" title="">Following</a>
                                </li>
                                <li>
                                    <div class="post-user">
                                        <div class="post-avatar">
                                            <a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a>
                                        </div>
                                        <div class="post-userName">
                                            <p><a href="#" title="">religram</a></p>
                                            <p>Ha Noi, Viet Nam</p>
                                        </div>
                                    </div>
                                    <a class="btn btn-follow" href="#" title="">Follow</a>
                                </li>
                                <li>
                                    <div class="post-user">
                                        <div class="post-avatar">
                                            <a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a>
                                        </div>
                                        <div class="post-userName">
                                            <p><a href="#" title="">religram</a></p>
                                            <p>Ha Noi, Viet Nam</p>
                                        </div>
                                    </div>
                                    <a class="btn btn-follow" href="#" title="">Follow</a>
                                </li>
                                <li>
                                    <div class="post-user">
                                        <div class="post-avatar">
                                            <a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a>
                                        </div>
                                        <div class="post-userName">
                                            <p><a href="#" title="">religram</a></p>
                                            <p>Ha Noi, Viet Nam</p>
                                        </div>
                                    </div>
                                    <a class="btn btn-follow" href="#" title="">Follow</a>
                                </li>
                                <li>
                                    <div class="post-user">
                                        <div class="post-avatar">
                                            <a href="#" title=""><img alt="" src="images/image-thumb.jpg"/></a>
                                        </div>
                                        <div class="post-userName">
                                            <p><a href="#" title="">religram</a></p>
                                            <p>Ha Noi, Viet Nam</p>
                                        </div>
                                    </div>
                                    <a class="btn btn-follow" href="#" title="">Follow</a>
                                </li>
                            </ul>
                        </div>
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
    </div>
</template>

<script>
    export default {
        name: "Profile",
        methods: {
            loadEditProfile() {
                this.$router.push({name: 'editprofile'})
            }
        }
    }
</script>

<style scoped>
</style>