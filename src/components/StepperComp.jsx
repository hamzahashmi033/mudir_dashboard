"use client";

import {
  Box,
  Step,
  StepDescription,
  StepIndicator,
  StepStatus,
  StepTitle,
  StepSeparator,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
  { title: "Third", description: "Select Rooms" },
];

export default function StepperComp({ stage }) {
  const { activeStep } = useSteps({
    index: stage , // This can be dynamically set based on your application's state
    count: steps.length,
  });
  
  
  return (
    <>
      <Stepper size="sm" gap={0} index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={
                  <Box
                    bg="#5876B7"
                    color="white"
                    borderRadius="full"
                    w="24px"
                    h="24px"
                  ></Box>
                } // Customize complete icon
                active={
                  <Box
                    bg="#5876B7"
                    color="white"
                    borderRadius="full"
                    w="24px"
                    h="24px"
                  />
                } // Active step styling
                inactive={
                  <Box
                    w="24px"
                    h="24px"
                    borderRadius="full"
                    border="2px"
                    borderColor="#5876B7"
                  />
                } // Inactive step styling
              />
            </StepIndicator>
            <StepSeparator _horizontal={{ ml: "-8px" }} />
          </Step>
        ))}
      </Stepper>
    </>
  );
}
