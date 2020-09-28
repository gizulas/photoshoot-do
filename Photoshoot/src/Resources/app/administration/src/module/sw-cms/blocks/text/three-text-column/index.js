import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'three-text-column',
    label: 'sw-cms.blocks.text.threeTextColumn.label',
    category: 'text',
    component: 'sw-cms-block-three-text-column',
    previewComponent: 'sw-cms-preview-three-text-column',
    defaultConfig: {
        marginBottom: '',
        marginTop: '',
        marginLeft: '',
        marginRight: '',
        sizingMode: 'boxed'
    },
    slots: {
        left: {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h1>35%</h1>
                        <span>more visits</span>
                        <p>… want to learn more about your restaurant and meals - with inviting photos.</p>
                        `.trim()
                    }
                }
            }
        },
        center: {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h1>42%</h1>
			            <span>more directions</span>
                        <p>…to your place - with attractive photos of it.</p>
                        `.trim()
                    }
                }
            }
        },
        right: {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h1>30%</h1>
			            <span>more reservations</span>
                        <p>…when people see, what to expect - with delicious photos.</p>
                        `.trim()
                    }
                }
            }
        }
    }
});
