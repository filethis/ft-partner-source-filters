/*
Copyright 2018 FileThis, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* ft-partner-source-filters element demo */
/* Imports */
/**

An element that lets parters filter the sources/institutions they want.

@demo
 */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import 'ft-element-demo/ft-element-demo.js';

import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/polymer/polymer-legacy.js';
import '../ft-partner-source-filters.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

Polymer
({
  _template: html`
        <style include="iron-flex iron-flex-alignment iron-positioning"></style>

        <div name="ft-partner-source-filters" style="width:100%; height: 100%; ">

            <ft-partner-source-filters></ft-partner-source-filters>
        </div>
`,

  is: 'demo-fixture',

  properties:
  {
  }
});
