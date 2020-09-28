import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'button',
    label: 'sw-cms.elements.button.label',
    component: 'sw-cms-el-button',
    configComponent: 'sw-cms-el-config-button',
    previewComponent: 'sw-cms-el-preview-button',
    defaultConfig: {
        buttonText: {
            source: 'static',
            value: 'Button Text'
        },
        buttonLink: {
            source: 'static',
            value: 'Button Link'
        },
        displayMode: {
            source: 'static',
            value: 'standard'
        }
    }
});
