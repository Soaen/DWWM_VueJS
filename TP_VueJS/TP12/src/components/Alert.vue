<template>
    <div class="alert-box">
        <h2 class="alert-title">
            <slot name="alerttitle"></slot>

        </h2>
        <p>
            <slot name="alerttext"></slot>
        </p> 
    </div>
</template>

<style>

.alert-box{
    background-color: red;
    width: 50%;
    padding: 25px;
    color: white;
    margin: 20px;
}
.alert-title{
    font-weight: bold;
}

</style>