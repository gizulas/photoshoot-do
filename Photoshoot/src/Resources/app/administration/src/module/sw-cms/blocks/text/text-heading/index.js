import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'text-heading',
    label: 'sw-cms.blocks.text.textHeading.label',
    category: 'text',
    component: 'sw-cms-block-text-heading',
    previewComponent: 'sw-cms-preview-text-heading',
    defaultConfig: {
        marginBottom: '',
        marginTop: '',
        marginLeft: '',
        marginRight: '',
        sizingMode: 'boxed'
    },
    slots: {
        'text-header': {
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
        },
        'text-content': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        `.trim()
                    }
                }
            }
        }
    }
});
