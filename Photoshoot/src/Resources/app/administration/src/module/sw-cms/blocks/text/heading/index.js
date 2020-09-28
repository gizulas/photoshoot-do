import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'heading',
    label: 'sw-cms.blocks.text.heading.label',
    category: 'text',
    component: 'sw-cms-block-heading',
    previewComponent: 'sw-cms-preview-heading',
    defaultConfig: {
        marginBottom: '',
        marginTop: '',
        marginLeft: '',
        marginRight: '',
        sizingMode: 'boxed'
    },
    slots: {
        'header': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        Lorem Ipsum dolor sit amet
                        `.trim()
                    }
                }
            }
        }
    }
});
