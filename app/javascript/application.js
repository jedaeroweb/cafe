// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "@rails/ujs"
import "jquery"

window.$ = window.jQuery
import "jquery-ui";
import "jquery-pagination";

import { Modal } from "bootstrap"
window.Modal = Modal

import 'common'
import 'index'
import "channels"
