# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@rails/ujs", to: "rails-ujs.js"
pin "trix"
pin "@popperjs/core", to: "https://ga.jspm.io/npm:@popperjs/core@2.11.8/dist/esm/index.js" # Popper.js 추가
pin "bootstrap", to: "https://ga.jspm.io/npm:bootstrap@5.3.2/dist/js/bootstrap.esm.js" # Bootstrap ESM 버전으로 변경
pin "@fancyapps/ui", to: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.esm.js"
pin "jquery" , to: "jquery.js"
pin "jquery-ui" , to: "jquery-ui.min.js"
pin "jquery-pagination", to: "jquery.pagination.js"
pin "common", to: "common.js"
pin "index", to: "index.js"
pin "@rails/actioncable", to: "actioncable.esm.js"
pin_all_from "app/javascript/channels", under: "channels"
