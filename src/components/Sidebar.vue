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
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <feather-icon type="home"></feather-icon>
                  Dashboard <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <feather-icon type="briefcase"></feather-icon>
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <feather-icon type="bar-chart-2"></feather-icon>
                  Reports
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <feather-icon type="layers"></feather-icon>
                  Integrations
                </a>
              </li>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <feather-icon type="plus-circle"></feather-icon>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <feather-icon type="file-text"></feather-icon>
                  Current month
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <feather-icon type="file-text"></feather-icon>
                  Last quarter
                </a>
              </li>
            </ul>
          </div>
        </nav>
</template>

<script>
    export default {
        name: 'sidebar',
        data() {
            return {
                msg: 'Dashboard'
            }
        }
    }
</script>

<style>
</style>
