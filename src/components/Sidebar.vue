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
