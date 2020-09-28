import template from './sw-cms-el-button.html.twig';
import './sw-cms-el-button.scss';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-button', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    computed: {
        buttonText() {
            return this.element.config.buttonText.value;
        },
        buttonLink() {
            return this.element.config.buttonLink.value;
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('button');
        },
    }
});
