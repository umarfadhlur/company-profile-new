import{d as et,i as at,j as lt,r,b as m,c as Y,e as t,g as a,l,f as v,w as s,K as b,B as g,a3 as c,x as I,W as Z,F as st,y as it,C as W,T as ot}from"./index.c057e6d1.js";import{_ as rt}from"./profile-16.a5dcf128.js";import{S as nt,N as dt,P as ut,a as ct}from"./pagination.min.78145247.js";import{c as pt,_ as x}from"./codePreview.a08e92cc.js";import{I as H}from"./icon-bell.6ddf1118.js";import{I as h}from"./icon-code.4c9c0299.js";import{I as K,a as vt}from"./icon-at.d86f5ae6.js";import{I as X}from"./icon-facebook.e33c2e08.js";import{I as J}from"./icon-github.34a5fbc1.js";import{f as p,N as n,o,V as d,_ as u}from"./transition.58b777b6.js";import{o as mt,s as bt,d as B,f as ft,c as Q}from"./tabs.38a6023f.js";import"./dom.9fe5c930.js";import"./micro-task.ad597616.js";import"./open-closed.972c8bc2.js";import"./use-resolve-button-type.1a3be00e.js";const yt=t("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[t("li",null,[t("a",{href:"javascript:;",class:"text-primary hover:underline"},"Components")]),t("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[t("span",null,"Modals")])],-1),gt={class:"pt-5 space-y-8"},xt={class:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"},ht={class:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"},kt=t("span",{class:"ltr:mr-3 rtl:ml-3"},"Documentation: ",-1),wt=t("a",{href:"https://headlessui.com/vue/dialog",target:"_blank",class:"block hover:underline"},"https://headlessui.com/vue/dialog",-1),_t={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},Ct={class:"panel"},Tt={class:"flex items-center justify-between mb-5"},Dt=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Basic",-1),jt={class:"flex items-center"},$t={class:"mb-5"},Pt={class:"flex items-center justify-center"},Mt={class:"fixed inset-0 overflow-y-auto"},St={class:"flex min-h-full items-start justify-center px-4 py-8"},qt=t("div",{class:"text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"}," Modal Title ",-1),Rt={class:"p-5"},Ot=t("p",null," Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi. ",-1),zt={class:"flex justify-end items-center mt-8"},It=t("pre",null,`<!-- basic -->
<div class="mb-5">
  <!-- Trigger -->
  <div class="flex items-center justify-center">
    <button type="button" class="btn btn-primary" @click="modal1 = true">Launch modal</button>
  </div>

  <!-- Modal -->
  <TransitionRoot appear :show="modal1" as="template">
    <Dialog as="div" @close="modal1 = false" class="relative z-50">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center px-4 py-8">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
              <button type="button" class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none" @click="modal1 = false">
                <svg> ... </svg>
              </button>
              <div class="text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Modal Title</div>
              <div class="p-5">
                <p>
                  Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                </p>

                <div class="flex justify-end items-center mt-8">
                  <button type="button" @click="modal1 = false" class="btn btn-outline-danger">Discard</button>
                  <button type="button" @click="modal1 = false" class="btn btn-primary ltr:ml-4 rtl:mr-4">Save</button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
const modal1 = ref(false);
<\/script>
`,-1),Ut={class:"panel"},Vt={class:"flex items-center justify-between mb-5"},Lt=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Vertically Centered",-1),Ft={class:"flex items-center"},Nt={class:"mb-5"},Et={class:"flex items-center justify-center"},At={class:"fixed inset-0 overflow-y-auto"},Gt={class:"flex min-h-full items-center justify-center px-4 py-8"},Bt=t("div",{class:"text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"}," Modal Title ",-1),Qt={class:"p-5"},Yt=t("p",null," Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi. ",-1),Zt={class:"flex justify-end items-center mt-8"},Wt=t("pre",null,`<!-- vertically centered -->
<div class="mb-5">
  <!-- Trigger -->
  <div class="flex items-center justify-center">
    <button type="button" class="btn btn-info" @click="modal2 = true">Launch modal</button>
  </div>

  <!-- Modal -->
  <TransitionRoot appear :show="modal2" as="template">
    <Dialog as="div" @close="modal2 = false" class="relative z-50">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center px-4 py-8">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
              <button type="button" class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none" @click="modal2 = false">
                <svg> ... </svg>
              </button>
              <div class="text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Modal Title</div>
              <div class="p-5">
                <p>
                  Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                </p>

                <div class="flex justify-end items-center mt-8">
                  <button type="button" @click="modal2 = false" class="btn btn-outline-danger">Discard</button>
                  <button type="button" @click="modal2 = false" class="btn btn-primary ltr:ml-4 rtl:mr-4">Save</button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
const modal2 = ref(false);
<\/script>
`,-1),Ht={class:"panel"},Kt={class:"flex items-center justify-between mb-5"},Xt=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Static",-1),Jt={class:"flex items-center"},te={class:"mb-5"},ee={class:"flex items-center justify-center"},ae={class:"fixed inset-0 overflow-y-auto"},le={class:"flex min-h-full items-start justify-center px-4 py-8"},se=t("div",{class:"text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"}," Modal Title ",-1),ie={class:"p-5"},oe=t("p",null," Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi. ",-1),re={class:"flex justify-end items-center mt-8"},ne=t("pre",null,`<!-- static -->
<div class="mb-5">
  <!-- Trigger -->
  <div class="flex items-center justify-center">
    <button type="button" class="btn btn-secondary" @click="modal3 = true">Static modal</button>
  </div>

  <!-- Modal -->
  <TransitionRoot appear :show="modal3" as="template">
    <Dialog as="div" class="relative z-50">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center px-4 py-8">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
              <button type="button" class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none" @click="modal3 = false">
                <svg> ... </svg>
              </button>
              <div class="text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Modal Title</div>
              <div class="p-5">
                <p>
                  Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                </p>

                <div class="flex justify-end items-center mt-8">
                  <button type="button" @click="modal3 = false" class="btn btn-outline-danger">Discard</button>
                  <button type="button" @click="modal3 = false" class="btn btn-primary ltr:ml-4 rtl:mr-4">Save</button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
const modal3 = ref(false);
<\/script>
`,-1),de={class:"panel"},ue={class:"flex items-center justify-between mb-5"},ce=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Remove animation",-1),pe={class:"flex items-center"},ve={class:"mb-5"},me={class:"flex items-center justify-center"},be={class:"fixed inset-0 overflow-y-auto"},fe={class:"flex min-h-full items-start justify-center px-4 py-8"},ye=t("div",{class:"text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"}," Modal Title ",-1),ge={class:"p-5"},xe=t("p",null," Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi. ",-1),he={class:"flex justify-end items-center mt-8"},ke=t("pre",null,`<!-- remove animation -->
<div class="mb-5">
  <!-- Trigger -->
  <div class="flex items-center justify-center">
    <button type="button" class="btn btn-success" @click="modal4 = true">Launch modal</button>
  </div>

  <!-- Modal -->
  <Dialog as="div" :open="modal4" @close="modal4 = false" class="relative z-50">
    <DialogOverlay class="fixed inset-0 bg-[black]/60" />

    <div class="fixed inset-0 overflow-y-auto">
      <div class="flex min-h-full items-start justify-center px-4 py-8">
        <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
          <button type="button" class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none" @click="modal4 = false">
            <svg> ... </svg>
          </button>
          <div class="text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Modal Title</div>
          <div class="p-5">
            <p>
              Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
            </p>

            <div class="flex justify-end items-center mt-8">
              <button type="button" @click="modal4 = false" class="btn btn-outline-danger">Discard</button>
              <button type="button" @click="modal4 = false" class="btn btn-primary ltr:ml-4 rtl:mr-4">Save</button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </div>
  </Dialog>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
const modal4 = ref(false);
<\/script>
`,-1),we={class:"panel"},_e={class:"flex items-center justify-between mb-5"},Ce=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Optional sizes",-1),Te={class:"flex items-center"},De={class:"mb-5"},je={class:"flex items-center justify-center gap-2"},$e={class:"fixed inset-0 overflow-y-auto"},Pe={class:"flex min-h-full items-start justify-center px-4 py-8"},Me=t("div",{class:"text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"}," Modal Title ",-1),Se={class:"p-5"},qe=t("p",null," Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi. ",-1),Re={class:"flex justify-end items-center mt-8"},Oe={class:"fixed inset-0 overflow-y-auto"},ze={class:"flex min-h-full items-start justify-center px-4 py-8"},Ie=t("div",{class:"text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"}," Modal Title ",-1),Ue={class:"p-5"},Ve=t("p",null," Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi. ",-1),Le={class:"flex justify-end items-center mt-8"},Fe={class:"fixed inset-0 overflow-y-auto"},Ne={class:"flex min-h-full items-start justify-center px-4 py-8"},Ee=t("div",{class:"text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"}," Modal Title ",-1),Ae={class:"p-5"},Ge=t("p",null," Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi. ",-1),Be={class:"flex justify-end items-center mt-8"},Qe=t("pre",null,`<!-- extra large -->
<div>
  <!-- Trigger -->
  <button type="button" class="btn btn-warning" @click="modal5 = true">Extra large</button>

  <!-- Modal -->
  <TransitionRoot appear :show="modal5" as="template">
    <Dialog as="div" @close="modal5 = false" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center px-4 py-8">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-5xl text-black dark:text-white-dark">
              <button type="button" class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none" @click="modal5 = false">
                <svg> ... </svg>
              </button>
              <div class="text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Modal Title</div>
              <div class="p-5">
                <p>
                  Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                </p>

                <div class="flex justify-end items-center mt-8">
                  <button type="button" @click="modal5 = false" class="btn btn-outline-danger">Discard</button>
                  <button type="button" @click="modal5 = false" class="btn btn-primary ltr:ml-4 rtl:mr-4">Save</button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</div>

<!-- large -->
<div>
  <!-- Trigger -->
  <button type="button" class="btn btn-danger" @click="modal6 = true">Large</button>

  <!-- Modal -->
  <TransitionRoot appear :show="modal6" as="template">
    <Dialog as="div" @close="modal6 = false" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center px-4 py-8">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-xl text-black dark:text-white-dark">
              <button type="button" class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none" @click="modal6 = false">
                <svg> ... </svg>
              </button>
              <div class="text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Modal Title</div>
              <div class="p-5">
                <p>
                  Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                </p>

                <div class="flex justify-end items-center mt-8">
                  <button type="button" @click="modal6 = false" class="btn btn-outline-danger">Discard</button>
                  <button type="button" @click="modal6 = false" class="btn btn-primary ltr:ml-4 rtl:mr-4">Save</button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</div>

<!-- small -->
<div>
  <!-- Trigger -->
  <button type="button" class="btn btn-secondary" @click="modal7 = true">Small</button>

  <!-- Modal -->
  <TransitionRoot appear :show="modal7" as="template">
    <Dialog as="div" @close="modal7 = false" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center px-4 py-8">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-sm text-black dark:text-white-dark">
              <button type="button" class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none" @click="modal7 = false">
                <svg> ... </svg>
              </button>
              <div class="text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Modal Title</div>
              <div class="p-5">
                <p>
                  Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                </p>

                <div class="flex justify-end items-center mt-8">
                  <button type="button" @click="modal7 = false" class="btn btn-outline-danger">Discard</button>
                  <button type="button" @click="modal7 = false" class="btn btn-primary ltr:ml-4 rtl:mr-4">Save</button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
const modal5 = ref(false);
const modal6 = ref(false);
const modal7 = ref(false);
<\/script>
`,-1),Ye={class:"panel"},Ze={class:"flex items-center justify-between mb-5"},We=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Video",-1),He={class:"flex items-center"},Ke={class:"mb-5"},Xe={class:"flex items-center justify-center"},Je={class:"fixed inset-0 overflow-y-auto"},ta={class:"flex min-h-full items-start justify-center px-4 py-8"},ea=t("div",{class:"p-5"},[t("iframe",{src:"https://www.youtube.com/embed/tgbNymZ7vqY",class:"w-full h-[250px] md:h-[550px]"})],-1),aa=t("pre",null,`<!-- video -->
<div class="mb-5">
  <!-- Trigger -->
  <div class="flex items-center justify-center">
    <button type="button" class="btn btn-primary" @click="modal8 = true">Play Youtube</button>
  </div>

  <!-- Modal -->
  <TransitionRoot appear :show="modal8" as="template">
    <Dialog as="div" @close="modal8 = false" class="relative z-50">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center px-4 py-8">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="relative overflow-hidden w-full max-w-3xl py-8">
              <button type="button" class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none" @click="modal8 = false">
                <svg> ... </svg>
              </button>
              <div class="p-5">
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" class="w-full h-[250px] md:h-[550px]"></iframe>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
import { useAppStore } from '@/stores/index';
const store = useAppStore();
const modal8 = ref(false);
<\/script>
`,-1),la={class:"panel lg:col-span-2"},sa={class:"flex items-center justify-between mb-5"},ia=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Animation Style Modal",-1),oa={class:"flex items-center"},ra={class:"mb-5"},na={class:"flex flex-wrap items-center justify-center gap-2"},da={class:"fixed inset-0 overflow-y-auto"},ua={class:"flex min-h-full items-start justify-center px-4 py-8"},ca=t("div",{class:"text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"}," Modal Title ",-1),pa={class:"p-5"},va=t("p",null," Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi. ",-1),ma={class:"flex justify-end items-center mt-8"},ba={class:"fixed inset-0 overflow-y-auto"},fa={class:"flex min-h-full items-start justify-center px-4 py-8"},ya=t("div",{class:"text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"}," Modal Title ",-1),ga={class:"p-5"},xa=t("p",null," Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi. ",-1),ha={class:"flex justify-end items-center mt-8"},ka={class:"fixed inset-0 overflow-y-auto"},wa={class:"flex min-h-full items-start justify-center px-4 py-8"},_a=t("div",{class:"text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"}," Modal Title ",-1),Ca={class:"p-5"},Ta=t("p",null," Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi. ",-1),Da={class:"flex justify-end items-center mt-8"},ja={class:"fixed inset-0 overflow-y-auto"},$a={class:"flex min-h-full items-start justify-center px-4 py-8"},Pa=t("div",{class:"text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"}," Modal Title ",-1),Ma={class:"p-5"},Sa=t("p",null," Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi. ",-1),qa={class:"flex justify-end items-center mt-8"},Ra={class:"fixed inset-0 overflow-y-auto"},Oa={class:"flex min-h-full items-start justify-center px-4 py-8"},za=t("div",{class:"text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"}," Modal Title ",-1),Ia={class:"p-5"},Ua=t("p",null," Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi. ",-1),Va={class:"flex justify-end items-center mt-8"},La={class:"fixed inset-0 overflow-y-auto"},Fa={class:"flex min-h-full items-start justify-center px-4 py-8"},Na=t("div",{class:"text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"}," Modal Title ",-1),Ea={class:"p-5"},Aa=t("p",null," Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi. ",-1),Ga={class:"flex justify-end items-center mt-8"},Ba={class:"fixed inset-0 overflow-y-auto"},Qa={class:"flex min-h-full items-start justify-center px-4 py-8"},Ya=t("div",{class:"text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"}," Modal Title ",-1),Za={class:"p-5"},Wa=t("p",null," Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi. ",-1),Ha={class:"flex justify-end items-center mt-8"},Ka={class:"fixed inset-0 overflow-y-auto"},Xa={class:"flex min-h-full items-start justify-center px-4 py-8"},Ja=t("div",{class:"text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"}," Modal Title ",-1),tl={class:"p-5"},el=t("p",null," Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi. ",-1),al={class:"flex justify-end items-center mt-8"},ll=t("pre",null,`<!-- fadein -->
<div>
  <!-- Trigger -->
  <button type="button" class="btn btn-primary" @click="modal9 = true">FadeIn</button>

  <!-- Modal -->
  <TransitionRoot appear :show="modal9" as="template">
    <Dialog as="div" @close="modal9 = false" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center px-4 py-8">
          <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark animate__animated animate__fadeIn">
            <button type="button" class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none" @click="modal9 = false">
              <svg> ... </svg>
            </button>
            <div class="text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Modal Title</div>
            <div class="p-5">
              <p>
                Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
              </p>

              <div class="flex justify-end items-center mt-8">
                <button type="button" @click="modal9 = false" class="btn btn-outline-danger">Discard</button>
                <button type="button" @click="modal9 = false" class="btn btn-primary ltr:ml-4 rtl:mr-4">Save</button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</div>

<!-- slidein down -->
<div>
  <!-- Trigger -->
  <button type="button" class="btn btn-info" @click="modal10 = true">SlideIn Down</button>

  <!-- Modal -->
  <TransitionRoot appear :show="modal10" as="template">
    <Dialog as="div" @close="modal10 = false" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center px-4 py-8">
          <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark animate__animated animate__slideInDown">
            <button type="button" class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none" @click="modal10 = false">
              <svg> ... </svg>
            </button>
            <div class="text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Modal Title</div>
            <div class="p-5">
              <p>
                Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
              </p>

              <div class="flex justify-end items-center mt-8">
                <button type="button" @click="modal10 = false" class="btn btn-outline-danger">Discard</button>
                <button type="button" @click="modal10 = false" class="btn btn-primary ltr:ml-4 rtl:mr-4">Save</button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</div>

<!-- fadein up -->
<div>
  <!-- Trigger -->
  <button type="button" class="btn btn-success" @click="modal11 = true">FadeIn Up</button>

  <!-- Modal -->
  <TransitionRoot appear :show="modal11" as="template">
    <Dialog as="div" @close="modal11 = false" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center px-4 py-8">
          <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark animate__animated animate__fadeInUp">
            <button type="button" class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none" @click="modal11 = false">
              <svg> ... </svg>
            </button>
            <div class="text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Modal Title</div>
            <div class="p-5">
              <p>
                Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
              </p>

              <div class="flex justify-end items-center mt-8">
                <button type="button" @click="modal11 = false" class="btn btn-outline-danger">Discard</button>
                <button type="button" @click="modal11 = false" class="btn btn-primary ltr:ml-4 rtl:mr-4">Save</button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</div>

<!-- slidein up -->
<div>
  <!-- Trigger -->
  <button type="button" class="btn btn-warning" @click="modal12 = true">SlideIn Up</button>

  <!-- Modal -->
  <TransitionRoot appear :show="modal12" as="template">
    <Dialog as="div" @close="modal12 = false" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center px-4 py-8">
          <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark animate__animated animate__slideInUp">
            <button type="button" class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none" @click="modal12 = false">
              <svg> ... </svg>
            </button>
            <div class="text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Modal Title</div>
            <div class="p-5">
              <p>
                Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
              </p>

              <div class="flex justify-end items-center mt-8">
                <button type="button" @click="modal12 = false" class="btn btn-outline-danger">Discard</button>
                <button type="button" @click="modal12 = false" class="btn btn-primary ltr:ml-4 rtl:mr-4">Save</button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</div>

<!-- fadein left -->
<div>
  <!-- Trigger -->
  <button type="button" class="btn btn-danger" @click="modal13 = true">FadeIn Left</button>

  <!-- Modal -->
  <TransitionRoot appear :show="modal13" as="template">
    <Dialog as="div" @close="modal13 = false" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center px-4 py-8">
          <DialogPanel
            class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark animate__animated"
            :class="store.rtlClass === 'rtl' ? 'animate__fadeInRight' : 'animate__fadeInLeft'"
          >
            <button type="button" class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none" @click="modal13 = false">
              <svg> ... </svg>
            </button>
            <div class="text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Modal Title</div>
            <div class="p-5">
              <p>
                Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
              </p>

              <div class="flex justify-end items-center mt-8">
                <button type="button" @click="modal13 = false" class="btn btn-outline-danger">Discard</button>
                <button type="button" @click="modal13 = false" class="btn btn-primary ltr:ml-4 rtl:mr-4">Save</button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</div>

<!-- rotatein left -->
<div>
  <!-- Trigger -->
  <button type="button" class="btn btn-secondary" @click="modal14 = true">RotateIn Left</button>

  <!-- Modal -->
  <TransitionRoot appear :show="modal14" as="template">
    <Dialog as="div" @close="modal14 = false" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center px-4 py-8">
          <DialogPanel
            class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark animate__animated"
            :class="store.rtlClass === 'rtl' ? 'animate__rotateInDownRight' : 'animate__rotateInDownLeft'"
          >
            <button type="button" class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none" @click="modal14 = false">
              <svg> ... </svg>
            </button>
            <div class="text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Modal Title</div>
            <div class="p-5">
              <p>
                Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
              </p>

              <div class="flex justify-end items-center mt-8">
                <button type="button" @click="modal14 = false" class="btn btn-outline-danger">Discard</button>
                <button type="button" @click="modal14 = false" class="btn btn-primary ltr:ml-4 rtl:mr-4">Save</button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</div>

<!-- fadein right -->
<div>
  <!-- Trigger -->
  <button type="button" class="btn btn-dark" @click="modal15 = true">FadeIn Right</button>

  <!-- Modal -->
  <TransitionRoot appear :show="modal15" as="template">
    <Dialog as="div" @close="modal15 = false" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center px-4 py-8">
          <DialogPanel
            class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark animate__animated"
            :class="store.rtlClass === 'rtl' ? 'animate__fadeInLeft' : 'animate__fadeInRight'"
          >
            <button type="button" class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none" @click="modal15 = false">
              <svg> ... </svg>
            </button>
            <div class="text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Modal Title</div>
            <div class="p-5">
              <p>
                Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
              </p>

              <div class="flex justify-end items-center mt-8">
                <button type="button" @click="modal15 = false" class="btn btn-outline-danger">Discard</button>
                <button type="button" @click="modal15 = false" class="btn btn-primary ltr:ml-4 rtl:mr-4">Save</button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</div>

<!-- zoomin up -->
<div>
  <!-- Trigger -->
  <button type="button" class="btn btn-primary" @click="modal16 = true">ZoomIn Up</button>

  <!-- Modal -->
  <TransitionRoot appear :show="modal16" as="template">
    <Dialog as="div" @close="modal16 = false" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center px-4 py-8">
          <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark animate__animated animate__zoomInUp">
            <button type="button" class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none" @click="modal16 = false">
              <svg> ... </svg>
            </button>
            <div class="text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Modal Title</div>
            <div class="p-5">
              <p>
                Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
              </p>

              <div class="flex justify-end items-center mt-8">
                <button type="button" @click="modal16 = false" class="btn btn-outline-danger">Discard</button>
                <button type="button" @click="modal16 = false" class="btn btn-primary ltr:ml-4 rtl:mr-4">Save</button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</div>


<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
const modal9 = ref(false);
const modal10 = ref(false);
const modal11 = ref(false);
const modal12 = ref(false);
const modal13 = ref(false);
const modal14 = ref(false);
const modal15 = ref(false);
const modal16 = ref(false);
<\/script>
`,-1),sl={class:"panel lg:col-span-2"},il={class:"flex items-center justify-between mb-5"},ol=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Custom",-1),rl={class:"flex items-center"},nl={class:"mb-5"},dl=t("p",{class:"text-center mb-4"},"More Custom Modals.",-1),ul={class:"flex flex-wrap items-center justify-center gap-2"},cl={class:"fixed inset-0 overflow-y-auto"},pl={class:"flex min-h-full items-start justify-center px-4 py-8"},vl={class:"flex items-center justify-center dark:text-white-dark/70 text-base font-medium text-[#1f2937] p-5"},ml={class:"flex items-center justify-center w-16 h-16 rounded-full bg-[#f1f2f3] dark:bg-white/10"},bl={class:"p-5"},fl=t("div",{class:"text-white-dark text-center text-sm"},[t("p",null," Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consequat auctor turpis, vitae dictum augue efficitur vitae. Vestibulum a risus ipsum. Quisque nec lacus dolor. Quisque ornare tempor orci id rutrum. ")],-1),yl={class:"flex justify-end items-center mt-8"},gl={class:"fixed inset-0 overflow-y-auto"},xl={class:"flex min-h-full items-start justify-center px-4 py-8"},hl=t("div",{class:"text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"}," Tabs ",-1),kl={class:"p-5"},wl=t("a",{href:"javascript:;",class:"p-3.5 py-2 -mb-[1px] block pointer-events-none text-white-light dark:text-dark"},"Disabled",-1),_l=t("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),Cl=t("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Tl=t("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Dl=t("div",{class:"flex items-start"},[t("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[t("img",{src:ot,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"})]),t("div",{class:"flex-auto"},[t("h5",{class:"text-xl font-medium mb-4"},"Media heading"),t("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),jl=t("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),$l={class:"flex justify-end items-center mt-8"},Pl={class:"fixed inset-0 overflow-y-auto"},Ml={class:"flex min-h-full items-start justify-center px-4 py-8"},Sl={class:"px-5 pt-5 ltr:text-right rtl:text-left"},ql=t("div",{class:"p-5"},[t("div",{class:"text-white dark:text-white-light text-center"},[t("div",{class:"rounded-full w-20 h-20 mx-auto mb-7 overflow-hidden"},[t("img",{src:rt,alt:"",class:"w-full h-full object-cover"})]),t("p",{class:"font-semibold"},[v("Click on view to access "),t("br"),v("your profile.")])]),t("div",{class:"flex justify-center items-center mt-8 mb-5"},[t("button",{type:"button",class:"btn bg-white text-black dark:btn-dark"},"View")])],-1),Rl={class:"fixed inset-0 overflow-y-auto"},Ol={class:"flex min-h-full items-start justify-center px-4 py-8"},zl=t("div",{class:"text-lg font-semibold ltr:pl-5 rtl:pr-5 py-5 ltr:pr-[50px] rtl:pl-[50px]"},"Login",-1),Il={class:"p-5"},Ul={class:"relative mb-4"},Vl={class:"absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark"},Ll=t("input",{type:"email",placeholder:"Email",class:"form-input ltr:pl-10 rtl:pr-10"},null,-1),Fl={class:"relative mb-4"},Nl={class:"absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark"},El=t("input",{type:"password",placeholder:"Password",class:"form-input ltr:pl-10 rtl:pr-10"},null,-1),Al=t("button",{type:"button",class:"btn btn-primary w-full"},"Login",-1),Gl=t("div",{class:"my-4 text-center text-xs text-white-dark dark:text-white-dark/70"},"OR",-1),Bl={class:"flex items-center justify-center gap-3 mb-5"},Ql={href:"javascript:void(0);",class:"btn btn-outline-primary flex gap-1"},Yl=t("span",null,"Facebook",-1),Zl={href:"javascript:void(0);",class:"btn btn-outline-danger flex gap-1"},Wl=t("span",null,"Github",-1),Hl=t("div",{class:"p-5 border-t border-[#ebe9f1] dark:border-white/10 text-sm"},[t("p",{class:"text-center text-white-dark dark:text-white-dark/70"},[v(" Looking to "),t("a",{href:"javascript:;",class:"text-[#515365] hover:underline dark:text-white-dark"},"create an account?")])],-1),Kl={class:"fixed inset-0 overflow-y-auto"},Xl={class:"flex min-h-full items-start justify-center px-4 py-8"},Jl=t("div",{class:"text-lg font-semibold ltr:pl-5 rtl:pr-5 py-5 ltr:pr-[50px] rtl:pl-[50px]"},"Register",-1),ts={class:"p-5"},es={class:"relative mb-4"},as={class:"absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark"},ls=t("input",{type:"text",placeholder:"Name",class:"form-input ltr:pl-10 rtl:pr-10"},null,-1),ss={class:"relative mb-4"},is={class:"absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark"},os=t("input",{type:"email",placeholder:"Email",class:"form-input ltr:pl-10 rtl:pr-10"},null,-1),rs={class:"relative mb-4"},ns={class:"absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark"},ds=t("input",{type:"password",placeholder:"Password",class:"form-input ltr:pl-10 rtl:pr-10"},null,-1),us=t("button",{type:"button",class:"btn btn-primary w-full"},"Submit",-1),cs=t("div",{class:"my-4 text-center text-xs text-white-dark dark:text-white-dark/70"},"OR",-1),ps={class:"flex items-center justify-center gap-3 mb-5"},vs={href:"javascript:void(0);",class:"btn btn-outline-primary flex gap-1"},ms=t("span",null,"Facebook",-1),bs={href:"javascript:void(0);",class:"btn btn-outline-danger flex gap-1"},fs=t("span",null,"Github",-1),ys=t("div",{class:"p-5 border-t border-[#ebe9f1] dark:border-white/10 text-sm"},[t("p",{class:"text-center text-white-dark dark:text-white-dark/70"},[v(" Already have "),t("a",{href:"javascript:;",class:"text-[#515365] hover:underline dark:text-white-dark"},"Login?")])],-1),gs={class:"fixed inset-0 overflow-y-auto"},xs={class:"flex min-h-full items-start justify-center px-4 py-8"},hs=t("div",{class:"text-lg font-semibold ltr:pl-5 rtl:pr-5 py-5 ltr:pr-[50px] rtl:pl-[50px]"},"Slider",-1),ks={class:"px-5"},ws=["src"],_s={href:"javascript:;",class:"swiper-button-prev-ex1 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2"},Cs={href:"javascript:;",class:"swiper-button-next-ex1 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2"},Ts=t("pre",null,`<!-- standard  -->
<div>
  <!-- Trigger -->
  <button type="button" class="btn btn-primary" @click="modal17 = true">Standard</button>

  <!-- Modal -->
  <TransitionRoot appear :show="modal17" as="template">
    <Dialog as="div" @close="modal17 = false" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center px-4 py-8">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
              <div class="flex items-center justify-center dark:text-white-dark/70 text-base font-medium text-[#1f2937] p-5">
                <div class="flex items-center justify-center w-16 h-16 rounded-full bg-[#f1f2f3] dark:bg-white/10">
                  <svg> ... </svg>
                </div>
              </div>
              <div class="p-5">
                <div class="text-white-dark text-center text-sm">
                  <p>
                    Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consequat auctor turpis, vitae dictum
                    augue efficitur vitae. Vestibulum a risus ipsum. Quisque nec lacus dolor. Quisque ornare tempor orci id rutrum.
                  </p>
                </div>
                <div class="flex justify-end items-center mt-8">
                  <button type="button" class="btn btn-outline-danger" @click="modal17 = false">Discard</button>
                  <button type="button" class="btn btn-primary ltr:ml-4 rtl:mr-4" @click="modal17 = false">Save</button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</div>

<!-- tabs -->
<div>
  <!-- Trigger -->
  <button type="button" class="btn btn-info" @click="modal18 = true">Tabs</button>

  <!-- Modal -->
  <TransitionRoot appear :show="modal18" as="template">
    <Dialog as="div" @close="modal18 = false" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center px-4 py-8">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
              <button type="button" class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none" @click="modal18 = false">
                <svg> ... </svg>
              </button>
              <div class="text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Tabs</div>
              <div class="p-5">
                <TabGroup as="div">
                  <TabList class="flex flex-wrap mt-3 border-b border-white-light dark:border-[#191e3a]">
                    <Tab as="template" v-slot="{ selected }">
                      <a
                        href="javascript:;"
                        class="p-3.5 py-2 -mb-[1px] block border border-transparent hover:text-primary dark:hover:border-b-black !outline-none"
                        :class="{ '!border-white-light !border-b-white  text-primary dark:!border-[#191e3a] dark:!border-b-black': selected }"
                        >Home</a
                      >
                    </Tab>
                    <Tab as="template" v-slot="{ selected }">
                      <a
                        href="javascript:;"
                        class="p-3.5 py-2 -mb-[1px] block border border-transparent hover:text-primary dark:hover:border-b-black !outline-none"
                        :class="{ '!border-white-light !border-b-white text-primary dark:!border-[#191e3a] dark:!border-b-black': selected }"
                        >Profile</a
                      >
                    </Tab>
                    <Tab as="template" v-slot="{ selected }">
                      <a
                        href="javascript:;"
                        class="p-3.5 py-2 -mb-[1px] block border border-transparent hover:text-primary dark:hover:border-b-black !outline-none"
                        :class="{ '!border-white-light !border-b-white text-primary dark:!border-[#191e3a] dark:!border-b-black': selected }"
                        >Contact</a
                      >
                    </Tab>
                    <Tab as="template" disabled>
                      <a href="javascript:;" class="p-3.5 py-2 -mb-[1px] block pointer-events-none text-white-light dark:text-dark">Disabled</a>
                    </Tab>
                  </TabList>
                  <TabPanels class="pt-5 flex-1 text-sm">
                    <TabPanel>
                      <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
                      <p class="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <div class="flex items-start">
                        <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                          <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover" />
                        </div>
                        <div class="flex-auto">
                          <h5 class="text-xl font-medium mb-4">Media heading</h5>
                          <p class="text-white-dark">
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                            turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                          </p>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </TabPanel>
                    <TabPanel>Disabled</TabPanel>
                  </TabPanels>
                </TabGroup>
                <div class="flex justify-end items-center mt-8">
                  <button type="button" @click="modal18 = false" class="btn btn-outline-danger">Discard</button>
                  <button type="button" @click="modal18 = false" class="btn btn-primary ltr:ml-4 rtl:mr-4">Save</button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</div>

<!-- profile -->
<div>
  <!-- Trigger -->
  <button type="button" class="btn btn-success" @click="modal19 = true">Profile</button>

  <!-- Modal -->
  <TransitionRoot appear :show="modal19" as="template">
    <Dialog as="div" @close="modal19 = false" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center px-4 py-8">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-[300px] text-black dark:text-white-dark bg-secondary dark:bg-secondary">
              <div class="px-5 pt-5 text-right">
                <button type="button" class="text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none" @click="modal19 = false">
                  <svg> ... </svg>
                </button>
              </div>
              <div class="p-5">
                <div class="text-white dark:text-white-light text-center">
                  <div class="rounded-full w-20 h-20 mx-auto mb-7 overflow-hidden"><img src="/assets/images/profile-16.jpeg" alt="" class="w-full h-full object-cover" /></div>
                  <p class="font-semibold">Click on view to access <br />your profile.</p>
                </div>
                <div class="flex justify-center items-center mt-8 mb-5">
                  <button type="button" class="btn bg-white text-black dark:btn-dark">View</button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</div>

<!-- login -->
<div>
  <!-- Trigger -->
  <button type="button" class="btn btn-warning" @click="modal20 = true">Login</button>

  <!-- Modal -->
  <TransitionRoot appear :show="modal20" as="template">
    <Dialog as="div" @close="modal20 = false" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center px-4 py-8">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="panel border-0 px-4 py-1 rounded-lg overflow-hidden w-full max-w-sm text-black dark:text-white-dark">
              <button type="button" class="absolute top-7 ltr:right-9 rtl:left-9 text-white-dark hover:text-dark outline-none" @click="modal20 = false">
                <svg> ... </svg>
              </button>
              <div class="text-lg font-semibold ltr:pl-5 rtl:pr-5 py-5 ltr:pr-[50px] rtl:pl-[50px]">Login</div>
              <div class="p-5">
                <form>
                  <div class="relative mb-4">
                    <span class="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark">
                      <svg> ... </svg>
                    </span>
                    <input type="email" placeholder="Email" class="form-input ltr:pl-10 rtl:pr-10" />
                  </div>
                  <div class="relative mb-4">
                    <span class="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark">
                      <svg> ... </svg>
                    </span>
                    <input type="password" placeholder="Password" class="form-input ltr:pl-10 rtl:pr-10" />
                  </div>
                  <button type="button" class="btn btn-primary w-full">Login</button>
                </form>
              </div>
              <div class="my-4 text-center text-xs text-white-dark dark:text-white-dark/70">OR</div>
              <div class="flex items-center justify-center gap-3 mb-5">
                <a href="javascript:void(0);" class="btn btn-outline-primary flex gap-1">
                  <svg> ... </svg>
                  <span>Facebook</span>
                </a>
                <a href="javascript:void(0);" class="btn btn-outline-danger flex gap-1">
                  <svg> ... </svg>
                  <span>Github</span>
                </a>
              </div>
              <div class="p-5 border-t border-[#ebe9f1] dark:border-white/10 text-sm">
                <p class="text-center text-white-dark dark:text-white-dark/70">
                  Looking to <a href="javascript:;" class="text-[#515365] hover:underline dark:text-white-dark">create an account?</a>
                </p>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</div>

<!-- Register -->
<div>
  <!-- Trigger -->
  <button type="button" class="btn btn-danger" @click="modal21 = true">Register</button>

  <!-- Modal -->
  <TransitionRoot appear :show="modal21" as="template">
    <Dialog as="div" @close="modal21 = false" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center px-4 py-8">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="panel border-0 px-4 py-1 rounded-lg overflow-hidden w-full max-w-sm text-black dark:text-white-dark">
              <button type="button" class="absolute top-7 ltr:right-9 rtl:left-9 text-white-dark hover:text-dark outline-none" @click="modal21 = false">
                <svg> ... </svg>
              </button>
              <div class="text-lg font-semibold ltr:pl-5 rtl:pr-5 py-5 ltr:pr-[50px] rtl:pl-[50px]">Register</div>
              <div class="p-5">
                <form>
                  <div class="relative mb-4">
                    <span class="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark">
                      <svg> ... </svg>
                    </span>
                    <input type="text" placeholder="Name" class="form-input ltr:pl-10 rtl:pr-10" />
                  </div>
                  <div class="relative mb-4">
                    <span class="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark">
                      <svg> ... </svg>
                    </span>
                    <input type="email" placeholder="Email" class="form-input ltr:pl-10 rtl:pr-10" />
                  </div>
                  <div class="relative mb-4">
                    <span class="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark">
                      <svg> ... </svg>
                    </span>
                    <input type="password" placeholder="Password" class="form-input ltr:pl-10 rtl:pr-10" />
                  </div>
                  <button type="button" class="btn btn-primary w-full">Submit</button>
                </form>
              </div>
              <div class="my-4 text-center text-xs text-white-dark dark:text-white-dark/70">OR</div>
              <div class="flex items-center justify-center gap-3 mb-5">
                <a href="javascript:void(0);" class="btn btn-outline-primary flex gap-1">
                  <svg> ... </svg>
                  <span>Facebook</span>
                </a>
                <a href="javascript:void(0);" class="btn btn-outline-danger flex gap-1">
                  <svg> ... </svg>
                  <span>Github</span>
                </a>
              </div>
              <div class="p-5 border-t border-[#ebe9f1] dark:border-white/10 text-sm">
                <p class="text-center text-white-dark dark:text-white-dark/70">
                  Already have <a href="javascript:;" class="text-[#515365] hover:underline dark:text-white-dark">Login?</a>
                </p>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</div>

<!-- slider -->
<div>
  <!-- Trigger -->
  <button type="button" class="btn btn-secondary" @click="modal22 = true">Slider</button>

  <!-- Modal -->
  <TransitionRoot appear :show="modal22" as="template">
    <Dialog as="div" @close="modal22 = false" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center px-4 py-8">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-xl text-black dark:text-white-dark">
              <button type="button" class="absolute top-7 ltr:right-5 rtl:left-5 text-white-dark hover:text-dark outline-none" @click="modal22 = false">
                <svg> ... </svg>
              </button>
              <div class="text-lg font-semibold ltr:pl-5 rtl:pr-5 py-5 ltr:pr-[50px] rtl:pl-[50px]">Slider</div>
              <div class="px-5">
                <swiper
                  :modules="[Navigation, Pagination]"
                  :navigation="{ nextEl: '.swiper-button-next-ex1', prevEl: '.swiper-button-prev-ex1' }"
                  :pagination="{ clickable: true }"
                  class="max-w-3xl mx-auto mb-5"
                  id="slider1"
                >
                  <template v-for="(item, i) in 3" :key="i">
                    <swiper-slide>
                      <img :src="\`/assets/images/carousel\${item}.jpeg\`" class="w-full" alt="" />
                    </swiper-slide>
                  </template>
                  <a
                    href="javascript:;"
                    class="
                      swiper-button-prev-ex1
                      grid
                      place-content-center
                      ltr:left-2
                      rtl:right-2
                      p-1
                      transition
                      text-primary
                      hover:text-white
                      border border-primary
                      hover:border-primary hover:bg-primary
                      rounded-full
                      absolute
                      z-[999]
                      top-1/2
                      -translate-y-1/2
                    "
                  >
                    <svg> ... </svg>
                  </a>
                  <a
                    href="javascript:;"
                    class="
                      swiper-button-next-ex1
                      grid
                      place-content-center
                      ltr:right-2
                      rtl:left-2
                      p-1
                      transition
                      text-primary
                      hover:text-white
                      border border-primary
                      hover:border-primary hover:bg-primary
                      rounded-full
                      absolute
                      z-[999]
                      top-1/2
                      -translate-y-1/2
                    "
                  >
                    <svg> ... </svg>
                  </a>
                </swiper>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const modal17 = ref(false);
const modal18 = ref(false);
const modal19 = ref(false);
const modal20 = ref(false);
const modal21 = ref(false);
const modal22 = ref(false);
<\/script>
`,-1),As=et({__name:"modals",setup(Ds){at({title:"Modals"});const{codeArr:f,toggleCode:y}=pt(),U=lt(),k=r(!1),w=r(!1),V=r(!1),_=r(!1),C=r(!1),T=r(!1),D=r(!1),F=r(!1),j=r(!1),$=r(!1),P=r(!1),M=r(!1),S=r(!1),q=r(!1),R=r(!1),O=r(!1),L=r(!1),z=r(!1),N=r(!1),E=r(!1),A=r(!1),G=r(!1);return(js,e)=>(m(),Y("div",null,[yt,t("div",gt,[t("div",xt,[t("div",ht,[a(H)]),kt,wt]),t("div",_t,[t("div",Ct,[t("div",Tt,[Dt,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[0]||(e[0]=i=>l(y)("code1"))},[t("span",jt,[a(h,{class:"me-2"}),v(" Code ")])])]),t("div",$t,[t("div",Pt,[t("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=i=>k.value=!0)},"Launch modal")]),a(l(p),{appear:"",show:k.value,as:"template"},{default:s(()=>[a(l(n),{as:"div",onClose:e[5]||(e[5]=i=>k.value=!1),class:"relative z-[51]"},{default:s(()=>[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[a(l(d),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",Mt,[t("div",St,[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[a(l(u),{class:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark"},{default:s(()=>[t("button",{type:"button",class:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",onClick:e[2]||(e[2]=i=>k.value=!1)},[a(c)]),qt,t("div",Rt,[Ot,t("div",zt,[t("button",{type:"button",onClick:e[3]||(e[3]=i=>k.value=!1),class:"btn btn-outline-danger"},"Discard"),t("button",{type:"button",onClick:e[4]||(e[4]=i=>k.value=!1),class:"btn btn-primary ltr:ml-4 rtl:mr-4"},"Save")])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])]),l(f).includes("code1")?(m(),b(x,{key:0},{default:s(()=>[It]),_:1})):g("",!0)]),t("div",Ut,[t("div",Vt,[Lt,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[6]||(e[6]=i=>l(y)("code2"))},[t("span",Ft,[a(h,{class:"me-2"}),v(" Code ")])])]),t("div",Nt,[t("div",Et,[t("button",{type:"button",class:"btn btn-info",onClick:e[7]||(e[7]=i=>w.value=!0)},"Launch modal")]),a(l(p),{appear:"",show:w.value,as:"template"},{default:s(()=>[a(l(n),{as:"div",onClose:e[11]||(e[11]=i=>w.value=!1),class:"relative z-[51]"},{default:s(()=>[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[a(l(d),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",At,[t("div",Gt,[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[a(l(u),{class:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark"},{default:s(()=>[t("button",{type:"button",class:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",onClick:e[8]||(e[8]=i=>w.value=!1)},[a(c)]),Bt,t("div",Qt,[Yt,t("div",Zt,[t("button",{type:"button",onClick:e[9]||(e[9]=i=>w.value=!1),class:"btn btn-outline-danger"},"Discard"),t("button",{type:"button",onClick:e[10]||(e[10]=i=>w.value=!1),class:"btn btn-primary ltr:ml-4 rtl:mr-4"},"Save")])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])]),l(f).includes("code2")?(m(),b(x,{key:0},{default:s(()=>[Wt]),_:1})):g("",!0)]),t("div",Ht,[t("div",Kt,[Xt,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[12]||(e[12]=i=>l(y)("code3"))},[t("span",Jt,[a(h,{class:"me-2"}),v(" Code ")])])]),t("div",te,[t("div",ee,[t("button",{type:"button",class:"btn btn-secondary",onClick:e[13]||(e[13]=i=>V.value=!0)},"Static modal")]),a(l(p),{appear:"",show:V.value,as:"template"},{default:s(()=>[a(l(n),{as:"div",class:"relative z-[51]"},{default:s(()=>[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[a(l(d),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",ae,[t("div",le,[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[a(l(u),{class:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark"},{default:s(()=>[t("button",{type:"button",class:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",onClick:e[14]||(e[14]=i=>V.value=!1)},[a(c)]),se,t("div",ie,[oe,t("div",re,[t("button",{type:"button",onClick:e[15]||(e[15]=i=>V.value=!1),class:"btn btn-outline-danger"},"Discard"),t("button",{type:"button",onClick:e[16]||(e[16]=i=>V.value=!1),class:"btn btn-primary ltr:ml-4 rtl:mr-4"},"Save")])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])]),l(f).includes("code3")?(m(),b(x,{key:0},{default:s(()=>[ne]),_:1})):g("",!0)]),t("div",de,[t("div",ue,[ce,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[17]||(e[17]=i=>l(y)("code4"))},[t("span",pe,[a(h,{class:"me-2"}),v(" Code ")])])]),t("div",ve,[t("div",me,[t("button",{type:"button",class:"btn btn-success",onClick:e[18]||(e[18]=i=>_.value=!0)},"Launch modal")]),a(l(n),{as:"div",open:_.value,onClose:e[22]||(e[22]=i=>_.value=!1),class:"relative z-[51]"},{default:s(()=>[a(l(d),{class:"fixed inset-0 bg-[black]/60"}),t("div",be,[t("div",fe,[a(l(u),{class:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark"},{default:s(()=>[t("button",{type:"button",class:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",onClick:e[19]||(e[19]=i=>_.value=!1)},[a(c)]),ye,t("div",ge,[xe,t("div",he,[t("button",{type:"button",onClick:e[20]||(e[20]=i=>_.value=!1),class:"btn btn-outline-danger"},"Discard"),t("button",{type:"button",onClick:e[21]||(e[21]=i=>_.value=!1),class:"btn btn-primary ltr:ml-4 rtl:mr-4"},"Save")])])]),_:1})])])]),_:1},8,["open"])]),l(f).includes("code4")?(m(),b(x,{key:0},{default:s(()=>[ke]),_:1})):g("",!0)]),t("div",we,[t("div",_e,[Ce,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[23]||(e[23]=i=>l(y)("code5"))},[t("span",Te,[a(h,{class:"me-2"}),v(" Code ")])])]),t("div",De,[t("div",je,[t("div",null,[t("button",{type:"button",class:"btn btn-warning",onClick:e[24]||(e[24]=i=>C.value=!0)},"Extra large"),a(l(p),{appear:"",show:C.value,as:"template"},{default:s(()=>[a(l(n),{as:"div",onClose:e[28]||(e[28]=i=>C.value=!1),class:"relative z-[51]"},{default:s(()=>[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[a(l(d),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",$e,[t("div",Pe,[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[a(l(u),{class:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-5xl text-black dark:text-white-dark"},{default:s(()=>[t("button",{type:"button",class:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",onClick:e[25]||(e[25]=i=>C.value=!1)},[a(c)]),Me,t("div",Se,[qe,t("div",Re,[t("button",{type:"button",onClick:e[26]||(e[26]=i=>C.value=!1),class:"btn btn-outline-danger"},"Discard"),t("button",{type:"button",onClick:e[27]||(e[27]=i=>C.value=!1),class:"btn btn-primary ltr:ml-4 rtl:mr-4"}," Save ")])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])]),t("div",null,[t("button",{type:"button",class:"btn btn-danger",onClick:e[29]||(e[29]=i=>T.value=!0)},"Large"),a(l(p),{appear:"",show:T.value,as:"template"},{default:s(()=>[a(l(n),{as:"div",onClose:e[33]||(e[33]=i=>T.value=!1),class:"relative z-[51]"},{default:s(()=>[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[a(l(d),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",Oe,[t("div",ze,[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[a(l(u),{class:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-xl text-black dark:text-white-dark"},{default:s(()=>[t("button",{type:"button",class:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",onClick:e[30]||(e[30]=i=>T.value=!1)},[a(c)]),Ie,t("div",Ue,[Ve,t("div",Le,[t("button",{type:"button",onClick:e[31]||(e[31]=i=>T.value=!1),class:"btn btn-outline-danger"},"Discard"),t("button",{type:"button",onClick:e[32]||(e[32]=i=>T.value=!1),class:"btn btn-primary ltr:ml-4 rtl:mr-4"}," Save ")])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])]),t("div",null,[t("button",{type:"button",class:"btn btn-secondary",onClick:e[34]||(e[34]=i=>D.value=!0)},"Small"),a(l(p),{appear:"",show:D.value,as:"template"},{default:s(()=>[a(l(n),{as:"div",onClose:e[38]||(e[38]=i=>D.value=!1),class:"relative z-[51]"},{default:s(()=>[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[a(l(d),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",Fe,[t("div",Ne,[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[a(l(u),{class:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-sm text-black dark:text-white-dark"},{default:s(()=>[t("button",{type:"button",class:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",onClick:e[35]||(e[35]=i=>D.value=!1)},[a(c)]),Ee,t("div",Ae,[Ge,t("div",Be,[t("button",{type:"button",onClick:e[36]||(e[36]=i=>D.value=!1),class:"btn btn-outline-danger"},"Discard"),t("button",{type:"button",onClick:e[37]||(e[37]=i=>D.value=!1),class:"btn btn-primary ltr:ml-4 rtl:mr-4"}," Save ")])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])])]),l(f).includes("code5")?(m(),b(x,{key:0},{default:s(()=>[Qe]),_:1})):g("",!0)]),t("div",Ye,[t("div",Ze,[We,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[39]||(e[39]=i=>l(y)("code6"))},[t("span",He,[a(h,{class:"me-2"}),v(" Code ")])])]),t("div",Ke,[t("div",Xe,[t("button",{type:"button",class:"btn btn-primary",onClick:e[40]||(e[40]=i=>F.value=!0)},"Play Youtube")]),a(l(p),{appear:"",show:F.value,as:"template"},{default:s(()=>[a(l(n),{as:"div",onClose:e[42]||(e[42]=i=>F.value=!1),class:"relative z-[51]"},{default:s(()=>[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[a(l(d),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",Je,[t("div",ta,[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[a(l(u),{class:"relative overflow-hidden w-full max-w-3xl py-8"},{default:s(()=>[t("button",{type:"button",class:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",onClick:e[41]||(e[41]=i=>F.value=!1)},[a(c)]),ea]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])]),l(f).includes("code6")?(m(),b(x,{key:0},{default:s(()=>[aa]),_:1})):g("",!0)]),t("div",la,[t("div",sa,[ia,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[43]||(e[43]=i=>l(y)("code7"))},[t("span",oa,[a(h,{class:"me-2"}),v(" Code ")])])]),t("div",ra,[t("div",na,[t("div",null,[t("button",{type:"button",class:"btn btn-primary",onClick:e[44]||(e[44]=i=>j.value=!0)},"FadeIn"),a(l(p),{appear:"",show:j.value,as:"template"},{default:s(()=>[a(l(n),{as:"div",onClose:e[48]||(e[48]=i=>j.value=!1),class:"relative z-[51]"},{default:s(()=>[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[a(l(d),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",da,[t("div",ua,[a(l(u),{class:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark animate__animated animate__fadeIn"},{default:s(()=>[t("button",{type:"button",class:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",onClick:e[45]||(e[45]=i=>j.value=!1)},[a(c)]),ca,t("div",pa,[va,t("div",ma,[t("button",{type:"button",onClick:e[46]||(e[46]=i=>j.value=!1),class:"btn btn-outline-danger"},"Discard"),t("button",{type:"button",onClick:e[47]||(e[47]=i=>j.value=!1),class:"btn btn-primary ltr:ml-4 rtl:mr-4"}," Save ")])])]),_:1})])])]),_:1})]),_:1},8,["show"])]),t("div",null,[t("button",{type:"button",class:"btn btn-info",onClick:e[49]||(e[49]=i=>$.value=!0)},"SlideIn Down"),a(l(p),{appear:"",show:$.value,as:"template"},{default:s(()=>[a(l(n),{as:"div",onClose:e[53]||(e[53]=i=>$.value=!1),class:"relative z-[51]"},{default:s(()=>[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[a(l(d),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",ba,[t("div",fa,[a(l(u),{class:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark animate__animated animate__slideInDown"},{default:s(()=>[t("button",{type:"button",class:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",onClick:e[50]||(e[50]=i=>$.value=!1)},[a(c)]),ya,t("div",ga,[xa,t("div",ha,[t("button",{type:"button",onClick:e[51]||(e[51]=i=>$.value=!1),class:"btn btn-outline-danger"},"Discard"),t("button",{type:"button",onClick:e[52]||(e[52]=i=>$.value=!1),class:"btn btn-primary ltr:ml-4 rtl:mr-4"}," Save ")])])]),_:1})])])]),_:1})]),_:1},8,["show"])]),t("div",null,[t("button",{type:"button",class:"btn btn-success",onClick:e[54]||(e[54]=i=>P.value=!0)},"FadeIn Up"),a(l(p),{appear:"",show:P.value,as:"template"},{default:s(()=>[a(l(n),{as:"div",onClose:e[58]||(e[58]=i=>P.value=!1),class:"relative z-[51]"},{default:s(()=>[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[a(l(d),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",ka,[t("div",wa,[a(l(u),{class:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark animate__animated animate__fadeInUp"},{default:s(()=>[t("button",{type:"button",class:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",onClick:e[55]||(e[55]=i=>P.value=!1)},[a(c)]),_a,t("div",Ca,[Ta,t("div",Da,[t("button",{type:"button",onClick:e[56]||(e[56]=i=>P.value=!1),class:"btn btn-outline-danger"},"Discard"),t("button",{type:"button",onClick:e[57]||(e[57]=i=>P.value=!1),class:"btn btn-primary ltr:ml-4 rtl:mr-4"}," Save ")])])]),_:1})])])]),_:1})]),_:1},8,["show"])]),t("div",null,[t("button",{type:"button",class:"btn btn-warning",onClick:e[59]||(e[59]=i=>M.value=!0)},"SlideIn Up"),a(l(p),{appear:"",show:M.value,as:"template"},{default:s(()=>[a(l(n),{as:"div",onClose:e[63]||(e[63]=i=>M.value=!1),class:"relative z-[51]"},{default:s(()=>[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[a(l(d),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",ja,[t("div",$a,[a(l(u),{class:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark animate__animated animate__slideInUp"},{default:s(()=>[t("button",{type:"button",class:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",onClick:e[60]||(e[60]=i=>M.value=!1)},[a(c)]),Pa,t("div",Ma,[Sa,t("div",qa,[t("button",{type:"button",onClick:e[61]||(e[61]=i=>M.value=!1),class:"btn btn-outline-danger"},"Discard"),t("button",{type:"button",onClick:e[62]||(e[62]=i=>M.value=!1),class:"btn btn-primary ltr:ml-4 rtl:mr-4"}," Save ")])])]),_:1})])])]),_:1})]),_:1},8,["show"])]),t("div",null,[t("button",{type:"button",class:"btn btn-danger",onClick:e[64]||(e[64]=i=>S.value=!0)},"FadeIn Left"),a(l(p),{appear:"",show:S.value,as:"template"},{default:s(()=>[a(l(n),{as:"div",onClose:e[68]||(e[68]=i=>S.value=!1),class:"relative z-[51]"},{default:s(()=>[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[a(l(d),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",Ra,[t("div",Oa,[a(l(u),{class:I(["panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark animate__animated",l(U).rtlClass==="rtl"?"animate__fadeInRight":"animate__fadeInLeft"])},{default:s(()=>[t("button",{type:"button",class:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",onClick:e[65]||(e[65]=i=>S.value=!1)},[a(c)]),za,t("div",Ia,[Ua,t("div",Va,[t("button",{type:"button",onClick:e[66]||(e[66]=i=>S.value=!1),class:"btn btn-outline-danger"},"Discard"),t("button",{type:"button",onClick:e[67]||(e[67]=i=>S.value=!1),class:"btn btn-primary ltr:ml-4 rtl:mr-4"}," Save ")])])]),_:1},8,["class"])])])]),_:1})]),_:1},8,["show"])]),t("div",null,[t("button",{type:"button",class:"btn btn-secondary",onClick:e[69]||(e[69]=i=>q.value=!0)},"RotateIn Left"),a(l(p),{appear:"",show:q.value,as:"template"},{default:s(()=>[a(l(n),{as:"div",onClose:e[73]||(e[73]=i=>q.value=!1),class:"relative z-[51]"},{default:s(()=>[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[a(l(d),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",La,[t("div",Fa,[a(l(u),{class:I(["panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark animate__animated",l(U).rtlClass==="rtl"?"animate__rotateInDownRight":"animate__rotateInDownLeft"])},{default:s(()=>[t("button",{type:"button",class:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",onClick:e[70]||(e[70]=i=>q.value=!1)},[a(c)]),Na,t("div",Ea,[Aa,t("div",Ga,[t("button",{type:"button",onClick:e[71]||(e[71]=i=>q.value=!1),class:"btn btn-outline-danger"},"Discard"),t("button",{type:"button",onClick:e[72]||(e[72]=i=>q.value=!1),class:"btn btn-primary ltr:ml-4 rtl:mr-4"}," Save ")])])]),_:1},8,["class"])])])]),_:1})]),_:1},8,["show"])]),t("div",null,[t("button",{type:"button",class:"btn btn-dark",onClick:e[74]||(e[74]=i=>R.value=!0)},"FadeIn Right"),a(l(p),{appear:"",show:R.value,as:"template"},{default:s(()=>[a(l(n),{as:"div",onClose:e[78]||(e[78]=i=>R.value=!1),class:"relative z-[51]"},{default:s(()=>[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[a(l(d),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",Ba,[t("div",Qa,[a(l(u),{class:I(["panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark animate__animated",l(U).rtlClass==="rtl"?"animate__fadeInLeft":"animate__fadeInRight"])},{default:s(()=>[t("button",{type:"button",class:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",onClick:e[75]||(e[75]=i=>R.value=!1)},[a(c)]),Ya,t("div",Za,[Wa,t("div",Ha,[t("button",{type:"button",onClick:e[76]||(e[76]=i=>R.value=!1),class:"btn btn-outline-danger"},"Discard"),t("button",{type:"button",onClick:e[77]||(e[77]=i=>R.value=!1),class:"btn btn-primary ltr:ml-4 rtl:mr-4"}," Save ")])])]),_:1},8,["class"])])])]),_:1})]),_:1},8,["show"])]),t("div",null,[t("button",{type:"button",class:"btn btn-primary",onClick:e[79]||(e[79]=i=>O.value=!0)},"ZoomIn Up"),a(l(p),{appear:"",show:O.value,as:"template"},{default:s(()=>[a(l(n),{as:"div",onClose:e[83]||(e[83]=i=>O.value=!1),class:"relative z-[51]"},{default:s(()=>[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[a(l(d),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",Ka,[t("div",Xa,[a(l(u),{class:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark animate__animated animate__zoomInUp"},{default:s(()=>[t("button",{type:"button",class:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",onClick:e[80]||(e[80]=i=>O.value=!1)},[a(c)]),Ja,t("div",tl,[el,t("div",al,[t("button",{type:"button",onClick:e[81]||(e[81]=i=>O.value=!1),class:"btn btn-outline-danger"},"Discard"),t("button",{type:"button",onClick:e[82]||(e[82]=i=>O.value=!1),class:"btn btn-primary ltr:ml-4 rtl:mr-4"}," Save ")])])]),_:1})])])]),_:1})]),_:1},8,["show"])])])]),l(f).includes("code7")?(m(),b(x,{key:0},{default:s(()=>[ll]),_:1})):g("",!0)]),t("div",sl,[t("div",il,[ol,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[84]||(e[84]=i=>l(y)("code8"))},[t("span",rl,[a(h,{class:"me-2"}),v(" Code ")])])]),t("div",nl,[dl,t("div",ul,[t("div",null,[t("button",{type:"button",class:"btn btn-primary",onClick:e[85]||(e[85]=i=>L.value=!0)},"Standard"),a(l(p),{appear:"",show:L.value,as:"template"},{default:s(()=>[a(l(n),{as:"div",onClose:e[88]||(e[88]=i=>L.value=!1),class:"relative z-[51]"},{default:s(()=>[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[a(l(d),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",cl,[t("div",pl,[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[a(l(u),{class:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark"},{default:s(()=>[t("div",vl,[t("div",ml,[a(H,{class:"w-7 h-7"})])]),t("div",bl,[fl,t("div",yl,[t("button",{type:"button",class:"btn btn-outline-danger",onClick:e[86]||(e[86]=i=>L.value=!1)},"Discard"),t("button",{type:"button",class:"btn btn-primary ltr:ml-4 rtl:mr-4",onClick:e[87]||(e[87]=i=>L.value=!1)}," Save ")])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])]),t("div",null,[t("button",{type:"button",class:"btn btn-info",onClick:e[89]||(e[89]=i=>z.value=!0)},"Tabs"),a(l(p),{appear:"",show:z.value,as:"template"},{default:s(()=>[a(l(n),{as:"div",onClose:e[93]||(e[93]=i=>z.value=!1),class:"relative z-[51]"},{default:s(()=>[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[a(l(d),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",gl,[t("div",xl,[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[a(l(u),{class:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark"},{default:s(()=>[t("button",{type:"button",class:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",onClick:e[90]||(e[90]=i=>z.value=!1)},[a(c)]),hl,t("div",kl,[a(l(mt),{as:"div"},{default:s(()=>[a(l(bt),{class:"flex flex-wrap mt-3 border-b border-white-light dark:border-[#191e3a]"},{default:s(()=>[a(l(B),{as:"template"},{default:s(({selected:i})=>[t("a",{href:"javascript:;",class:I(["p-3.5 py-2 -mb-[1px] block border border-transparent hover:text-primary dark:hover:border-b-black !outline-none",{"!border-white-light !border-b-white  text-primary dark:!border-[#191e3a] dark:!border-b-black":i}])},"Home",2)]),_:1}),a(l(B),{as:"template"},{default:s(({selected:i})=>[t("a",{href:"javascript:;",class:I(["p-3.5 py-2 -mb-[1px] block border border-transparent hover:text-primary dark:hover:border-b-black !outline-none",{"!border-white-light !border-b-white text-primary dark:!border-[#191e3a] dark:!border-b-black":i}])},"Profile",2)]),_:1}),a(l(B),{as:"template"},{default:s(({selected:i})=>[t("a",{href:"javascript:;",class:I(["p-3.5 py-2 -mb-[1px] block border border-transparent hover:text-primary dark:hover:border-b-black !outline-none",{"!border-white-light !border-b-white text-primary dark:!border-[#191e3a] dark:!border-b-black":i}])},"Contact",2)]),_:1}),a(l(B),{as:"template",disabled:""},{default:s(()=>[wl]),_:1})]),_:1}),a(l(ft),{class:"pt-5 flex-1 text-sm"},{default:s(()=>[a(l(Q),null,{default:s(()=>[_l,Cl,Tl]),_:1}),a(l(Q),null,{default:s(()=>[Dl]),_:1}),a(l(Q),null,{default:s(()=>[jl]),_:1}),a(l(Q),null,{default:s(()=>[v("Disabled")]),_:1})]),_:1})]),_:1}),t("div",$l,[t("button",{type:"button",onClick:e[91]||(e[91]=i=>z.value=!1),class:"btn btn-outline-danger"},"Discard"),t("button",{type:"button",onClick:e[92]||(e[92]=i=>z.value=!1),class:"btn btn-primary ltr:ml-4 rtl:mr-4"}," Save ")])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])]),t("div",null,[t("button",{type:"button",class:"btn btn-success",onClick:e[94]||(e[94]=i=>N.value=!0)},"Profile"),a(l(p),{appear:"",show:N.value,as:"template"},{default:s(()=>[a(l(n),{as:"div",onClose:e[96]||(e[96]=i=>N.value=!1),class:"relative z-[51]"},{default:s(()=>[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[a(l(d),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",Pl,[t("div",Ml,[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[a(l(u),{class:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-[300px] text-black dark:text-white-dark bg-secondary dark:bg-secondary"},{default:s(()=>[t("div",Sl,[t("button",{type:"button",class:"text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",onClick:e[95]||(e[95]=i=>N.value=!1)},[a(c,{class:"w-5 h-5"})])]),ql]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])]),t("div",null,[t("button",{type:"button",class:"btn btn-warning",onClick:e[97]||(e[97]=i=>E.value=!0)},"Login"),a(l(p),{appear:"",show:E.value,as:"template"},{default:s(()=>[a(l(n),{as:"div",onClose:e[99]||(e[99]=i=>E.value=!1),class:"relative z-[51]"},{default:s(()=>[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[a(l(d),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",Rl,[t("div",Ol,[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[a(l(u),{class:"panel border-0 px-4 py-1 rounded-lg overflow-hidden w-full max-w-sm text-black dark:text-white-dark"},{default:s(()=>[t("button",{type:"button",class:"absolute top-7 ltr:right-9 rtl:left-9 text-white-dark hover:text-dark outline-none",onClick:e[98]||(e[98]=i=>E.value=!1)},[a(c,{class:"w-5 h-5"})]),zl,t("div",Il,[t("form",null,[t("div",Ul,[t("span",Vl,[a(Z,{class:"w-5 h-5"})]),Ll]),t("div",Fl,[t("span",Nl,[a(K,{class:"w-5 h-5"})]),El]),Al])]),Gl,t("div",Bl,[t("a",Ql,[a(X,{class:"w-5 h-5 shrink-0"}),Yl]),t("a",Zl,[a(J,{class:"shrink-0"}),Wl])]),Hl]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])]),t("div",null,[t("button",{type:"button",class:"btn btn-danger",onClick:e[100]||(e[100]=i=>A.value=!0)},"Register"),a(l(p),{appear:"",show:A.value,as:"template"},{default:s(()=>[a(l(n),{as:"div",onClose:e[102]||(e[102]=i=>A.value=!1),class:"relative z-[51]"},{default:s(()=>[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[a(l(d),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",Kl,[t("div",Xl,[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[a(l(u),{class:"panel border-0 px-4 py-1 rounded-lg overflow-hidden w-full max-w-sm text-black dark:text-white-dark"},{default:s(()=>[t("button",{type:"button",class:"absolute top-7 ltr:right-9 rtl:left-9 text-white-dark hover:text-dark outline-none",onClick:e[101]||(e[101]=i=>A.value=!1)},[a(c,{class:"w-5 h-5"})]),Jl,t("div",ts,[t("form",null,[t("div",es,[t("span",as,[a(Z,{class:"w-5 h-5"})]),ls]),t("div",ss,[t("span",is,[a(vt)]),os]),t("div",rs,[t("span",ns,[a(K,{class:"w-5 h-5"})]),ds]),us])]),cs,t("div",ps,[t("a",vs,[a(X,{class:"w-5 h-5 shrink-0"}),ms]),t("a",bs,[a(J,{class:"shrink-0"}),fs])]),ys]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])]),t("div",null,[t("button",{type:"button",class:"btn btn-secondary",onClick:e[103]||(e[103]=i=>G.value=!0)},"Slider"),a(l(p),{appear:"",show:G.value,as:"template"},{default:s(()=>[a(l(n),{as:"div",onClose:e[105]||(e[105]=i=>G.value=!1),class:"relative z-[51]"},{default:s(()=>[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[a(l(d),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),t("div",gs,[t("div",xs,[a(l(o),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:s(()=>[a(l(u),{class:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-xl text-black dark:text-white-dark"},{default:s(()=>[t("button",{type:"button",class:"absolute top-7 ltr:right-5 rtl:left-5 text-white-dark hover:text-dark outline-none",onClick:e[104]||(e[104]=i=>G.value=!1)},[a(c,{class:"w-5 h-5"})]),hs,t("div",ks,[(m(),b(l(ct),{modules:[l(dt),l(ut)],navigation:{nextEl:".swiper-button-next-ex1",prevEl:".swiper-button-prev-ex1"},pagination:{clickable:!0},class:"max-w-3xl mx-auto mb-5",id:"slider1",dir:l(U).rtlClass,key:l(U).rtlClass==="rtl"?"true":"false"},{default:s(()=>[(m(),Y(st,null,it(3,(i,tt)=>a(l(nt),{key:tt},{default:s(()=>[t("img",{src:`/assets/images/carousel${i}.jpeg`,class:"w-full",alt:""},null,8,ws)]),_:2},1024)),64)),t("a",_s,[a(W,{class:"w-5 h-5 rtl:-rotate-90 rotate-90"})]),t("a",Cs,[a(W,{class:"w-5 h-5 rtl:rotate-90 -rotate-90"})])]),_:1},8,["modules","navigation","dir"]))])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])])]),l(f).includes("code8")?(m(),b(x,{key:0},{default:s(()=>[Ts]),_:1})):g("",!0)])])])]))}});export{As as default};
