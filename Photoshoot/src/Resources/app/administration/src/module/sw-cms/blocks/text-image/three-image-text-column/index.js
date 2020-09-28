import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'three-image-text-column',
    label: 'sw-cms.blocks.textImage.threeImageTextColumn.label',
    category: 'text-image',
    component: 'sw-cms-block-three-image-text-column',
    previewComponent: 'sw-cms-preview-three-image-text-column',
    defaultConfig: {
        marginBottom: '',
        marginTop: '',
        marginLeft: '',
        marginRight: '',
        sizingMode: 'boxed'
    },
    slots: {
        'left-image': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' }
                },
                data: {
                    media: {
                        url: '/administration/static/img/cms/preview_camera_large.jpg'
                    }
                }
            }
        },
        'left-text': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                            <h1>Select a photoshoot</h1>
                            <p>We will organise your photoshoot with a professional potographer of our network. You will schedule a date with them.</p>
                        `.trim()
                    }
                }
            }
        },
        'center-image': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' }
                },
                data: {
                    media: {
                        url: '/administration/static/img/cms/preview_plant_large.jpg'
                    }
                }
            }
        },
        'center-text': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                            <h1>Meet your photographer</h1>
                            <p>They will come with professional camera and lighting. Just prepare your place and be ready for a great experience.</p>
                        `.trim()
                    }
                }
            }
        },
        'right-image': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' }
                },
                data: {
                    media: {
                        url: '/administration/static/img/cms/preview_glasses_large.jpg'
                    }
                }
            }
        },
        'right-text': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                            <h1>Download your photos</h1>
                            <p>Your high-resolution photos are ready to be downloaded and used on your web site, Google, Facebook,   Instagram, …</p>
                        `.trim()
                    }
                }
            }
        }
    }
});
