/*
 * Copyright 2019 Continuous Performance Test
 * 
 * 
 * This file is part of Continuous Performance Test.
 * https://github.com/continuousperftest/service-ui
 * 
 * Continuous Performance Test is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software Foundation, either
 * version 3 of the License, or (at your option) any later version.
 * 
 * Continuous Performance Test is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
 * PURPOSE. See the GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along with Continuous
 * Performance Test. If not, see <http://www.gnu.org/licenses/>.
 */
 
<template>
    <div class="footer-container">
        <div class="footer-main"></div>

        <div class="layout-copy"></div>

        <div class="footer-social"></div>
    </div>

</template>
<script>
    export default {
        data() {
            return {
            }
        },
        mounted () {
        },
    }
</script>
<style scoped>
    .footer-container {
        width: 100%;
        background-color: rgb(10, 47, 88)
    }

    a {
        text-decoration: none;
    }

    .footer-main {
        font-size: 0;
        padding-top: 40px;
        display: inline-block;
    }

    .footer-main .footer-main-title {
        line-height: 1;
        font-size: 22px;
        margin: 0;
    }

    .footer-main .footer-main-link {
        display: inline-block;
        margin: 12px 18px 0 0;
        line-height: 1;
        font-size: 12px;
        color: #768193;
    }

    .layout-copy {
        display: inline-block;
        width: 570px;
        height: 70px;
        margin-left: 3px;
    }

    .footer-social {
        float: right;
        font-size: 0;
        padding: 0 30px;
    }

</style>