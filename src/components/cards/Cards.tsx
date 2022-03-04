import * as React from 'react';
import {
    DocumentCard,
    DocumentCardActivity,
    DocumentCardDetails,
    DocumentCardPreview,
    DocumentCardTitle,
    IDocumentCardPreviewProps,
    DocumentCardType,
    IDocumentCardActivityPerson,
} from '@fluentui/react/lib/DocumentCard';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import { getTheme } from '@fluentui/react/lib/Styling';
import { TestImages } from '@fluentui/example-data';
import "./Cards.css"

const stackTokens: IStackTokens = { childrenGap: 20 };
const theme = getTheme();
const { palette, fonts } = theme;

const people: IDocumentCardActivityPerson[] = [
    
    { name: 'Micheal Scott', profileImageSrc: '', initials: 'RK' },
    { name: 'Micheal Scott', profileImageSrc: '', initials: 'RK' },
    { name: 'Aaron Reid', profileImageSrc: TestImages.personaMale },
    
];

const previewPropsUsingIcon: IDocumentCardPreviewProps = {
    previewImages: [
        {
            previewIconProps: {
                iconName: 'OpenFile',
                styles: { root: { fontSize: fonts.superLarge.fontSize, color: palette.white } },
            },
            width: 144,
        },
    ],
    styles: { previewIcon: { backgroundColor: palette.themePrimary } },
};

const previewProps: IDocumentCardPreviewProps = {
    getOverflowDocumentCountText: (overflowCount: number) => `+${overflowCount} more`,
    previewImages: [
        {
            name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreview,
            iconSrc: TestImages.iconPpt,
            width: 144,
        },
        {
            name: 'New Contoso Collaboration for Conference Presentation Draft',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreviewTwo,
            iconSrc: TestImages.iconPpt,
            width: 144,
        },
        {
            name: 'Spec Sheet for design',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreviewThree,
            iconSrc: TestImages.iconPpt,
            width: 144,
        },
        {
            name: 'Contoso Marketing Presentation',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreview,
            iconSrc: TestImages.iconPpt,
            width: 144,
        },
    ],
};

const previewOutlookUsingIcon: IDocumentCardPreviewProps = {
    previewImages: [
        {
            previewIconProps: {
                iconName: 'OutlookLogo',
                styles: {
                    root: {
                        fontSize: fonts.superLarge.fontSize,
                        color: '#0078d7',
                        backgroundColor: palette.neutralLighterAlt,
                    },
                },
            },
            width: 144,
        },
    ],
    styles: {
        previewIcon: { backgroundColor: palette.neutralLighterAlt },
    },
};

export const Cards: React.FunctionComponent = () => {
    return (
        <div>
            <Stack tokens={stackTokens}>
                <div className="card">
                    <div className="card1 cardOnly">
                        <DocumentCard
                            aria-label="Document Card with document preview. Revenue stream proposal fiscal year 2016 version 2.
      Created by Roko Kolar a few minutes ago"
                            type={DocumentCardType.compact}
                            onClickHref="http://google.com"
                        >
                            <DocumentCardPreview previewImages={[previewProps.previewImages[0]]} />
                            <DocumentCardDetails>
                                <DocumentCardTitle title="Revenue stream proposal fiscal year 2016 version02.pptx" shouldTruncate />
                               
                            </DocumentCardDetails>
                        </DocumentCard>
                    </div>

                    <div className="card2 cardOnly">
                        <DocumentCard
                            aria-label="Document Card with document preview. Revenue stream proposal fiscal year 2016 version 2.
      Created by Roko Kolar a few minutes ago"
                            type={DocumentCardType.compact}
                            onClickHref="http://google.com"
                        >
                            <DocumentCardPreview previewImages={[previewProps.previewImages[0]]} />
                            <DocumentCardDetails>
                                <DocumentCardTitle title="Revenue stream proposal fiscal year 2016 version02.pptx" shouldTruncate />
                                <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
                            </DocumentCardDetails>
                        </DocumentCard>
                    </div>
                </div>
            </Stack>
        </div>
    );
};
