# Live Coding Mock Interview 6 - TV Consumption Data Analysis

## Objective

The goal of this challenge is to assess your ability to analyze, visualize, and interpret a dataset representing TV consumption patterns. You are expected to derive actionable business insights and communicate them effectively.

## Dataset ([tv_consumption_data.csv](./tv_consumption_data.csv))

The dataset contains the following columns:

- **Timestamp**: The exact time of TV consumption.
- **Age_Group**: The age group of the viewer (e.g., 18-24, 25-34).
- **Region**: The geographic region of the viewer.
- **Channel**: The channel being watched (Channel A, Channel B, etc.).
- **View_Duration (mins)**: The duration (in minutes) the viewer spent watching.
- **Prime_Time (Yes/No)**: Whether the viewing occurred during prime time.

### Dataset Characteristics
- 1,000 rows, clean and balanced across regions, age groups, and channels.
- Minimal noise and duplicates.
- View duration ranges from 5 to 59 minutes.

## Tasks

### Data Analysis

1. **Prime Time Engagement Analysis**
   - [ ] Analyze the combined effect of `Age_Group` and `Region` on prime-time viewing durations.
   - [ ] Identify the highest and lowest engagement demographics during prime and non-prime times.

2. **Channel Performance Insights**
   - [ ] Compare channel performance across age groups during prime time.
   - [ ] Identify the top-performing channel for each demographic and explain patterns.

3. **Time-of-Day Dynamics**
   - [ ] Explore how view durations vary by time of day across channels.
   - [ ] Recommend scheduling strategies for channels to maximize engagement.

### Data Visualization

1. **Heatmap of Engagement**
   - [ ] Create a heatmap showing average view durations segmented by `Region` and `Channel`.

2. **Timeline Visualization**
   - [ ] Develop a time-series visualization of view durations by hour for each channel, segmented by `Prime_Time (Yes/No)`.

### Discussion Points

1. **Actionable Strategies**: Based on your findings, propose strategies to:
  - [ ] Increase engagement during low-performing time slots or regions.
  - [ ] Target specific demographics with tailored content or scheduling.

2. **Data Limitations**:
  - [ ] Highlight any missing or additional data that could improve the analysis.
  - [ ] Discuss assumptions made during the analysis.

## Expected Deliverables

- [ ] Code scripts for the analysis and visualizations.
- [ ] Visualizations (e.g., charts, heatmaps, time-series plots).
- [ ] A text file summarizing key insights and recommendations.

## Evaluation Criteria

- [ ] Depth of analysis and ability to uncover meaningful insights.
- [ ] Creativity in visualizing the data and explaining patterns.
- [ ] Communication of findings in a clear and actionable manner.
- [ ] Problem-solving skills and handling of multi-dimensional data.
- [ ] Efficient use of time to prioritize high-impact tasks.

---

Good luck! Focus on delivering high-quality insights and demonstrating your expertise in data analysis.
