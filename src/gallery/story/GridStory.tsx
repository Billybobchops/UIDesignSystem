import Grid from '@components/grid/Grid';
import GridItem from '@components/grid/GridItem';
import Heading from '@components/typography/Heading';

const GridStory = () => {
    return (
        <>
            {/* For demo purposes only. Please avoid using <style> tags like this */}
            <style>
                {`
				.grid-demo-item {
					align-items: center;
					background: linear-gradient(135deg, #49b859 0%, #18b4e9 100%);
					border-radius: 8px;
					color: white;
					display: flex;
					font-weight: 500;
					justify-content: center;
					min-height: 80px;
					padding: 1rem;
				}
				`}
            </style>

            <Heading semanticLevel='h3'>Basic Usage - 3 Columns</Heading>
            <Grid columns={3} gap='1rem' spacing='u-mb-xxl'>
                <div className='grid-demo-item'>Item 1</div>
                <div className='grid-demo-item'>Item 2</div>
                <div className='grid-demo-item'>Item 3</div>
                <div className='grid-demo-item'>Item 4</div>
                <div className='grid-demo-item'>Item 5</div>
                <div className='grid-demo-item'>Item 6</div>
            </Grid>

            <Heading semanticLevel='h3'>
                Custom Template - "200px auto 1fr"
            </Heading>
            <Grid columns='200px auto 1fr' gap='1rem' spacing='u-mb-xxl'>
                <div className='grid-demo-item'>Fixed 200px</div>
                <div className='grid-demo-item'>Auto-sized</div>
                <div className='grid-demo-item'>Flexible 1fr</div>
            </Grid>

            <Heading semanticLevel='h3'>Responsive Grid</Heading>
            <Grid
                columns={4}
                gap='1rem'
                responsive={{
                    sm: { columns: 1, gap: '0.5rem' },
                    md: { columns: 2, gap: '0.75rem' },
                    lg: { columns: 4, gap: '1rem' },
                }}
                spacing='u-mb-xxl'
			>
                <div className='grid-demo-item'>Responsive 1</div>
                <div className='grid-demo-item'>Responsive 2</div>
                <div className='grid-demo-item'>Responsive 3</div>
                <div className='grid-demo-item'>Responsive 4</div>
            </Grid>

            <Heading semanticLevel='h3'>With GridItem Positioning</Heading>
            <Grid
                columns={3}
                rows={3}
                gap='1rem'
                spacing='u-mb-xxl'
                style={{ height: '300px' }}
			>
                <GridItem columnSpan={2} className='grid-demo-item'>
                    Spans 2 columns
                </GridItem>
                <div className='grid-demo-item'>Normal item</div>
                <GridItem rowSpan={2} className='grid-demo-item'>
                    Spans 2 rows
                </GridItem>
                <div className='grid-demo-item'>Item 4</div>
                <div className='grid-demo-item'>Item 5</div>
                <div className='grid-demo-item'>Item 6</div>
            </Grid>

            <Heading semanticLevel='h3'>Different Gaps</Heading>
            <Grid
                columns={3}
                columnGap='2rem'
                rowGap='0.5rem'
                spacing='u-mb-xxl'
			>
                <div className='grid-demo-item'>Large col gap</div>
                <div className='grid-demo-item'>Small row gap</div>
                <div className='grid-demo-item'>Item 3</div>
                <div className='grid-demo-item'>Item 4</div>
                <div className='grid-demo-item'>Item 5</div>
                <div className='grid-demo-item'>Item 6</div>
            </Grid>
        </>
    );
};

export default GridStory;
