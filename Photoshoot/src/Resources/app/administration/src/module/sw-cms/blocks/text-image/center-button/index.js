import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'center-button',
    label: 'sw-cms.blocks.textImage.centerButton.label',
    category: 'text-image',
    component: 'sw-cms-block-center-button',
    previewComponent: 'sw-cms-preview-center-button',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        'button': {
            type: 'button',
            default: {
                config: {
                    buttonText: {
                        source: 'static',
                        value: `
                        Button Text
                        `.trim()
                    },
                    buttonLink: {
                        source: 'static',
                        value: ""
                    },
                }
            }
        },
    }
});
