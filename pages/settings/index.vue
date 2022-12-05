<template>
    <div class="settings-page">
        <div class="container page">
            <div class="row">

                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Your Settings</h1>

                    <form>
                        <fieldset>
                            <fieldset class="form-group">
                                <input class="form-control" type="text" placeholder="URL of profile picture">
                            </fieldset>
                            <fieldset class="form-group">
                                <input class="form-control form-control-lg" type="text" placeholder="Your Name">
                            </fieldset>
                            <fieldset class="form-group">
                                <textarea class="form-control form-control-lg" rows="8"
                                        placeholder="Short bio about you"></textarea>
                            </fieldset>
                            <fieldset class="form-group">
                                <input class="form-control form-control-lg" type="text" placeholder="Email">
                            </fieldset>
                            <fieldset class="form-group">
                                <input class="form-control form-control-lg" type="password" placeholder="Password">
                            </fieldset>
                            <button class="btn btn-lg btn-primary pull-xs-right">
                                Update Settings
                            </button>
                        </fieldset>
                    </form>
                    <hr/>
                    <button class="btn btn-outline-danger">Or click here to logout.</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default{
    middleware: 'authenticated',// 在路由匹配组件渲染之前会先执行中间件处理，直接写文件名字，如果有多个中间件处理，就写成数组，里面写所有需要的中间件文件名
    name: "settings",
    
}
</script>

<style>

</style>
  