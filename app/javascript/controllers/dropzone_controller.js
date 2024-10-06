import { Controller } from "@hotwired/stimulus"

import Dropzone from "dropzone"

import { DirectUpload } from "@rails/activestorage"

import { getMetaValue, findElement, removeElement, insertAfter } from "helpers"

// Connects to data-controller="dropzone"
export default class extends Controller {
  connect() {
    console.log("Hello, Dropzone!")
  }
}
