import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'hero',
    label: 'sw-cms.blocks.textImage.hero.label',
    category: 'text-image',
    component: 'sw-cms-block-hero',
    previewComponent: 'sw-cms-preview-hero',
    defaultConfig: {
        marginBottom: '',
        marginTop: '',
        marginLeft: '',
        marginRight: '',
        sizingMode: 'boxed'
    },
    slots: {
        'title': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                            Present your restaurant in full colors
                        `.trim()
                    }
                }
            }
        },
        'subtitle': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                            Professional interior and food photos can increase your reservations by 30%
                        `.trim()
                    }
                }
            }
        },
        'button': {
            type: 'button',
            default: {
                config: {
                    buttonText: {
                        source: 'static',
                        value: `
                        Get started now
                        `.trim()
                    },
                    buttonLink: {
                        source: 'static',
                        value: ""
                    },
                }
            }
        }
    }
});
